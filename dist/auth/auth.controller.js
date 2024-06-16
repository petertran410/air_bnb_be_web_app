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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const dto_1 = require("../users/dto");
const sign_in_guard_1 = require("./guards/sign-in.guard");
const users_service_1 = require("../users/users.service");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const dto_2 = require("../users/dto");
const check_existence_pipe_1 = require("../pipes/check-existence.pipe");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../users/entities");
let AuthController = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async signIn(user, req) {
        return req.user;
    }
    async signUp(data) {
        try {
            const user = await this.usersService.create(Object.assign(Object.assign({}, data), { role: 'Guest' }));
            return {
                message: 'Sign up successfully!',
                data: (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.User, user, { groups: ['guest'] }), {
                    groups: ['guest'],
                }),
            };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async changePassword(id, data) {
        try {
            const { oldPassword, newPassword, confirmedNewPassword } = data;
            if (newPassword === confirmedNewPassword) {
                await this.usersService.changePassword(+id, oldPassword, confirmedNewPassword);
                return { message: 'Successfully changed the password!' };
            }
            else {
                throw new common_1.BadRequestException('Password does not match!');
            }
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)(sign_in_guard_1.SignInGuard),
    (0, common_1.Post)('sign-in'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignInDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: dto_1.SignUpDTO,
    }),
    (0, common_1.Post)('sign-up'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(null)),
    __param(0, (0, common_1.Body)(check_existence_pipe_1.CheckExistencePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUpDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, swagger_1.ApiHeader)({ name: 'access_token', required: true }),
    (0, swagger_1.ApiBody)({ type: dto_2.ChangePasswordDTO }),
    (0, common_1.Put)('change-password/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.ChangePasswordDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map