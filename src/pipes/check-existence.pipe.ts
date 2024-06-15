import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { User } from 'src/users/entities';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CheckExistencePipe implements PipeTransform {
  constructor(private readonly usersService: UsersService) {}

  async transform(user: User, metadata: ArgumentMetadata) {
    if (!user.email || !user.phone) {
      const isExisted = await this.usersService.checkExistence(user);
      if (isExisted) {
        throw new BadRequestException(
          'This email and phone number is already existed!',
        );
      }
    }
    return user;
  }

  // async transform(user: User, metadata: ArgumentMetadata) {
  //   if (user.email) {
  //     const isExistedEmail = await this.usersService.checkExistence(user);
  //     if (isExistedEmail) {
  //       throw new BadRequestException('This email is already existed!');
  //     }
  //     return user;
  //   } else if (user.phone) {
  //     const isExistedPhone = await this.usersService.checkExistence(user);
  //     if (isExistedPhone) {
  //       throw new BadRequestException('This phone number is already existed!');
  //     }
  //     return user;
  //   }
  // }
}

export class asas {}
