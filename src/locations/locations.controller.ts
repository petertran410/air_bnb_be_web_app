import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import {
  ApiBody,
  ApiConsumes,
  ApiHeader,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { LocationUpdateDTO, LocationDTO } from './dto';
import { CompressImagePipe } from 'src/pipes/compress-image.pipe';
import { instanceToPlain, plainToClass } from 'class-transformer';
import { Location } from './entities';

@UseGuards(LocalAuthGuard)
@ApiTags('Locations')
@ApiHeader({ name: 'access_token', required: false })
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}
  
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'records', required: false })
  @ApiQuery({ name: 'page', required: false })
  @Get()
  async get(
    @Query('id') id: string,
    @Query('search') searchKeyword: string,
    @Query('records') records: string,
    @Query('page') page: string,
  ) {
    try {
      let data: any;

      if (+id) {
        data = await this.locationsService.findOne(+id);
      } else {
        data = await this.locationsService.findAll(
          searchKeyword,
          +records,
          +page,
        );
      }

      if (data?.length > 0 || data) {
        return { message: 'Successfully!', data };
      } else {
        throw new NotFoundException();
      }
    } catch (err) {
      throw err || new InternalServerErrorException();
    }
  }

  @Get('location-by-id/:id')
  async getLocations(@Param('id') id: string) {
    try {
      const location = await this.locationsService.findOne(+id);
      if (!location) {
        throw new NotFoundException('Location not found');
      }
      const data = instanceToPlain(plainToClass(Location, location));
      return { message: 'Successfully!', data };
    } catch (err) {
      throw err || new InternalServerErrorException();
    }
  }

  @ApiQuery({ name: 'pageIndex', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('location-search')
  async locationSearch(
    @Query('pageIndex') pageIndexParam: string = '1', // Default to '1' if not provided
    @Query('pageSize') pageSizeParam: string = '8', // Default to '8' if not provided
  ) {
    const pageIndex = +pageIndexParam; // Convert string to number
    const pageSize = +pageSizeParam; // Convert string to number

    try {
      const data = await this.locationsService.searchLocations(
        pageIndex,
        pageSize,
      );
      if (data?.length > 0) {
        return { message: 'Successfully!', data };
      } else {
        throw new NotFoundException();
      }
    } catch (err) {
      throw err || new InternalServerErrorException();
    }
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: LocationDTO })
  @Post('new')
  @UseInterceptors(FileInterceptor('photo'))
  async create(
    @Body() data: LocationDTO,
    @UploadedFile(CompressImagePipe) photo: Express.Multer.File,
  ) {
    try {
      const location = await this.locationsService.create({
        ...data,
        photo: data?.photo !== null ? photo && photo?.filename : null,
      });
      return { message: 'Successfully created!', data: location };
    } catch (err) {
      throw err || new InternalServerErrorException();
    }
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: LocationUpdateDTO })
  @ApiParam({ name: 'id', required: true })
  @Put('update/:id')
  @UseInterceptors(FileInterceptor('photo'))
  async update(
    @Param('id') id: string,
    @Body() data: LocationUpdateDTO,
    @UploadedFile(CompressImagePipe) photo: Express.Multer.File,
  ) {
    try {
      const updatedLocation = await this.locationsService.update(+id, {
        ...data,
        photo: data?.photo !== null ? photo && photo?.filename : null,
      });
      return { message: 'Successfully updated!', data: updatedLocation };
    } catch (err) {
      throw err || new InternalServerErrorException();
    }
  }

  @ApiParam({ name: 'id', required: true })
  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    try {
      await this.locationsService.delete(+id);
      return { message: 'Successfully deleted!' };
    } catch (err) {
      throw err || new InternalServerErrorException();
    }
  }
}
