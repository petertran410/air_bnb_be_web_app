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
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const rooms_service_1 = require("./rooms.service");
const swagger_1 = require("@nestjs/swagger");
const local_auth_guard_1 = require("../auth/guards/local-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const dto_1 = require("./dto");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("./entities");
const compress_image_pipe_1 = require("../pipes/compress-image.pipe");
let RoomsController = class RoomsController {
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    async get(id, location_id, searchKeyword, records, page) {
        try {
            let data;
            if (id) {
                data = await this.roomsService.findOne(+id);
            }
            else {
                data = await this.roomsService.findAll(+location_id, searchKeyword, +records, +page);
            }
            if ((data === null || data === void 0 ? void 0 : data.length) === 0 || !data) {
                throw new common_1.NotFoundException();
            }
            else {
                return {
                    message: 'Successfully!',
                    data: (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Room, data)),
                };
            }
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async getRoomId(id) {
        try {
            const room = await this.roomsService.findOne(+id);
            if (!room) {
                throw new common_1.NotFoundException('Room not found');
            }
            const data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Room, room));
            return { message: 'Successfully!', data };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async getByLocationId(location_id) {
        try {
            const data = await this.roomsService.findAll(+location_id, null, null, null);
            if (!data || data.length === 0) {
                throw new common_1.NotFoundException();
            }
            else {
                return {
                    message: 'Successfully!',
                    data: (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Room, data)),
                };
            }
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async create(data, photo) {
        try {
            const room = await this.roomsService.create(Object.assign(Object.assign({}, data), { photo: (data === null || data === void 0 ? void 0 : data.photo) !== null ? photo && (photo === null || photo === void 0 ? void 0 : photo.filename) : null }));
            return {
                message: 'Successfully created!',
                data: (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Room, room)),
            };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async update(id, data, photo) {
        try {
            const room = await this.roomsService.update(+id, Object.assign(Object.assign({}, data), { photo: (data === null || data === void 0 ? void 0 : data.photo) !== null ? photo && (photo === null || photo === void 0 ? void 0 : photo.filename) : null }));
            return {
                message: 'Successfully created!',
                data: (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Room, room)),
            };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async delete(id) {
        try {
            await this.roomsService.delete(+id);
            return { message: 'Successfully deleted!' };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
};
exports.RoomsController = RoomsController;
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'locationID', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'records', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('locationID')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('records')),
    __param(4, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('rooms-by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getRoomId", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'location_id', required: true }),
    (0, common_1.Get)('rooms-location'),
    __param(0, (0, common_1.Query)('location_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getByLocationId", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: dto_1.RoomDTO,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(compress_image_pipe_1.CompressImagePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RoomDTO, Object]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: dto_1.RoomUpdateDTO,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(compress_image_pipe_1.CompressImagePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.RoomDTO, Object]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "delete", null);
exports.RoomsController = RoomsController = __decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, swagger_1.ApiTags)('Rooms'),
    (0, swagger_1.ApiHeader)({ name: 'access_token', required: true }),
    (0, common_1.Controller)('rooms'),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsController);
//# sourceMappingURL=rooms.controller.js.map