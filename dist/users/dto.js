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
exports.ChangePasswordDTO = exports.SignInDTO = exports.SignUpDTO = exports.UserUpdateDTO = exports.UserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserDTO {
}
exports.UserDTO = UserDTO;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], UserDTO.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Ngọc Nhân' }),
    (0, class_validator_1.Matches)(/\D+/g, { message: 'Invalid name!' }),
    __metadata("design:type", String)
], UserDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'nhantran4102002@gmail.com' }),
    (0, class_validator_1.IsEmail)(undefined, { message: 'Invalid email!' }),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Nhantran@4102002' }),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0901391300' }),
    (0, class_validator_1.IsNumberString)(undefined, { message: 'Invalid phone number!' }),
    __metadata("design:type", String)
], UserDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date('2000-01-01').toISOString() }),
    (0, class_validator_1.IsDateString)(undefined, { message: 'Invalid date string!' }),
    __metadata("design:type", Date)
], UserDTO.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['Male', 'Female', 'Undefined'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDTO.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['Guest', 'Admin'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDTO.prototype, "role", void 0);
class UserUpdateDTO {
}
exports.UserUpdateDTO = UserUpdateDTO;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.Matches)(/\D+/g, { message: 'Invalid name!' }),
    __metadata("design:type", String)
], UserUpdateDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEmail)(undefined, { message: 'Invalid email!' }),
    __metadata("design:type", String)
], UserUpdateDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNumberString)(undefined, { message: 'Invalid phone number!' }),
    __metadata("design:type", String)
], UserUpdateDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsDateString)(undefined, { message: 'Invalid date string!' }),
    __metadata("design:type", Date)
], UserUpdateDTO.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['Male', 'Female', 'Undefined'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserUpdateDTO.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['Guest', 'Admin'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserUpdateDTO.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], UserUpdateDTO.prototype, "avatar", void 0);
class SignUpDTO {
}
exports.SignUpDTO = SignUpDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Matches)(/\D+/g, { message: 'Invalid name!' }),
    __metadata("design:type", String)
], SignUpDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(undefined, { message: 'Invalid email!' }),
    __metadata("design:type", String)
], SignUpDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: 'Password must contain: minimum 8 characters, a digit, an uppercase, a lowercase and a special characters!',
    }),
    __metadata("design:type", String)
], SignUpDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumberString)(undefined, { message: 'Invalid phone number!' }),
    __metadata("design:type", String)
], SignUpDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: new Date().toISOString(),
    }),
    (0, class_validator_1.IsDateString)(undefined, { message: 'Invalid date string!' }),
    __metadata("design:type", Date)
], SignUpDTO.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['Male', 'Female', 'Undefined'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDTO.prototype, "gender", void 0);
class SignInDTO {
}
exports.SignInDTO = SignInDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'tranngocnhan@gmail.com' }),
    (0, class_validator_1.IsEmail)(undefined, { message: 'Invalid email address!' }),
    __metadata("design:type", String)
], SignInDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'NgocNhan@123' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignInDTO.prototype, "password", void 0);
class ChangePasswordDTO {
}
exports.ChangePasswordDTO = ChangePasswordDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "oldPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: 'Password must contain: minimum 8 characters, a digit, an uppercase, a lowercase and a special characters!',
    }),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "newPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "confirmedNewPassword", void 0);
//# sourceMappingURL=dto.js.map