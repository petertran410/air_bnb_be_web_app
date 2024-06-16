"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsController = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("./locations.service");
const swagger_1 = require("@nestjs/swagger");
const local_auth_guard_1 = require("../auth/guards/local-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const dto_1 = require("./dto");
const compress_image_pipe_1 = require("../pipes/compress-image.pipe");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("./entities");
let LocationsController = class LocationsController {
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    async get(id, searchKeyword, records, page) {
        try {
            let data;
            if (+id) {
                data = await this.locationsService.findOne(+id);
            }
            else {
                data = await this.locationsService.findAll(searchKeyword, +records, +page);
            }
            if ((data === null || data === void 0 ? void 0 : data.length) > 0 || data) {
                return { message: 'Successfully!', data };
            }
            else {
                throw new common_1.NotFoundException();
            }
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async getLocations(id) {
        try {
            const location = await this.locationsService.findOne(+id);
            if (!location) {
                throw new common_1.NotFoundException('Location not found');
            }
            const data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Location, location));
            return { message: 'Successfully!', data };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async locationSearch(pageIndexParam = '1', pageSizeParam = '8') {
        const pageIndex = +pageIndexParam;
        const pageSize = +pageSizeParam;
        try {
            const data = await this.locationsService.searchLocations(pageIndex, pageSize);
            if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
                return { message: 'Successfully!', data };
            }
            else {
                throw new common_1.NotFoundException();
            }
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async create(data, photo) {
        try {
            const location = await this.locationsService.create(Object.assign(Object.assign({}, data), { photo: (data === null || data === void 0 ? void 0 : data.photo) !== null ? photo && (photo === null || photo === void 0 ? void 0 : photo.filename) : null }));
            return { message: 'Successfully created!', data: location };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async update(id, data, photo) {
        try {
            const updatedLocation = await this.locationsService.update(+id, Object.assign(Object.assign({}, data), { photo: (data === null || data === void 0 ? void 0 : data.photo) !== null ? photo && (photo === null || photo === void 0 ? void 0 : photo.filename) : null }));
            return { message: 'Successfully updated!', data: updatedLocation };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async delete(id) {
        try {
            await this.locationsService.delete(+id);
            return { message: 'Successfully deleted!' };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
};
exports.LocationsController = LocationsController;
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'records', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('records')),
    __param(3, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('location-by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "getLocations", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'pageIndex', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', required: false }),
    (0, common_1.Get)('location-search'),
    __param(0, (0, common_1.Query)('pageIndex')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "locationSearch", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: dto_1.LocationDTO }),
    (0, common_1.Post)('new'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(compress_image_pipe_1.CompressImagePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LocationDTO, Object]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: dto_1.LocationUpdateDTO }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(compress_image_pipe_1.CompressImagePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.LocationUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "delete", null);
exports.LocationsController = LocationsController = __decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, swagger_1.ApiTags)('Locations'),
    (0, swagger_1.ApiHeader)({ name: 'access_token', required: false }),
    (0, common_1.Controller)('locations'),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsController);
//# sourceMappingURL=locations.controller.js.map