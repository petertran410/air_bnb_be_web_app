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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const local_auth_guard_1 = require("../auth/guards/local-auth.guard");
const entities_1 = require("./entities");
const platform_express_1 = require("@nestjs/platform-express");
const class_transformer_1 = require("class-transformer");
const compress_image_pipe_1 = require("../pipes/compress-image.pipe");
const check_existence_pipe_1 = require("../pipes/check-existence.pipe");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async get(id, searchKeyword, records, page) {
        try {
            let data;
            if (+id) {
                data = await this.usersService.findOne(+id);
            }
            else
                data = await this.usersService.findAll(searchKeyword, +records, +page);
            if ((data === null || data === void 0 ? void 0 : data.length) === 0 || !data) {
                throw new common_1.NotFoundException();
            }
            else {
                const role = 'guest';
                data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.User, data, { groups: [role] }), {
                    groups: [role],
                });
                return { message: 'Successfully!', data };
            }
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async getUser(id) {
        try {
            const user = await this.usersService.findOne(+id);
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const role = 'guest';
            const data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.User, user, { groups: [role] }), {
                groups: [role],
            });
            return { message: 'Successfully!', data };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async getUserId(id) {
        try {
            const userId = await this.usersService.findOne(+id);
            if (!userId) {
                throw new common_1.NotFoundException('User not found');
            }
            const data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.User, userId));
            return { message: 'Successfully!', data };
        }
        catch (err) {
            throw err;
        }
    }
    async getSearchName(name) {
        try {
            const searchName = await this.usersService.searchName(name);
            if (!searchName) {
                throw new common_1.NotFoundException('Name not found');
            }
            const data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.User, searchName));
            return { message: 'Successfully!', data };
        }
        catch (err) {
            throw err;
        }
    }
    async create(data, avatar) {
        try {
            const user = await this.usersService.create(Object.assign(Object.assign({}, data), { avatar: (data === null || data === void 0 ? void 0 : data.avatar) !== null ? avatar && (avatar === null || avatar === void 0 ? void 0 : avatar.filename) : null }));
            return {
                message: 'Successfully created!',
                data: (role = 'guest') => (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.User, user, { groups: [role] }), {
                    groups: [role],
                }),
            };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async update(id, data, avatar) {
        try {
            const updatedUser = await this.usersService.update(+id, Object.assign(Object.assign({}, data), { avatar: (data === null || data === void 0 ? void 0 : data.avatar) !== null ? avatar && (avatar === null || avatar === void 0 ? void 0 : avatar.filename) : null }));
            return {
                message: 'Successfully updated!',
                data: (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.User, updatedUser, { groups: ['Guest'] }), { groups: ['Guest'] }),
            };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async delete(id) {
        try {
            await this.usersService.delete(+id);
            return { message: 'Successfully deleted!!' };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
};
exports.UsersController = UsersController;
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
], UsersController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('user-by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserId", null);
__decorate([
    (0, common_1.Get)('search/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getSearchName", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: dto_1.UserDTO,
    }),
    (0, common_1.Post)('new'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, common_1.Body)(check_existence_pipe_1.CheckExistencePipe)),
    __param(1, (0, common_1.UploadedFile)(compress_image_pipe_1.CompressImagePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserDTO, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: dto_1.UserUpdateDTO,
    }),
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(check_existence_pipe_1.CheckExistencePipe)),
    __param(2, (0, common_1.UploadedFile)(compress_image_pipe_1.CompressImagePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UserUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiHeader)({ name: 'access_token', required: true }),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map