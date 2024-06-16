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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInStrategy = void 0;
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const dist_1 = require("@nestjs/config/dist");
let SignInStrategy = class SignInStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'sign-in') {
    constructor(userService, jwtService, configService) {
        super({ usernameField: 'email' });
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validate(email, password) {
        try {
            const user = await this.userService.validate(email, password);
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            else {
                const payload = { data: user };
                const token = this.jwtService.sign(payload);
                return { user: payload, access_token: token };
            }
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
};
exports.SignInStrategy = SignInStrategy;
exports.SignInStrategy = SignInStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        dist_1.ConfigService])
], SignInStrategy);
//# sourceMappingURL=sign-in.strategy.js.map