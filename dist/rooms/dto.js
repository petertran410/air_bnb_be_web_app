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
exports.RoomUpdateDTO = exports.RoomDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class RoomDTO {
}
exports.RoomDTO = RoomDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RoomDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomDTO.prototype, "location_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RoomDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], RoomDTO.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomDTO.prototype, "beds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomDTO.prototype, "bathrooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomDTO.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomDTO.prototype, "bedrooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomDTO.prototype, "washing_machine", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomDTO.prototype, "electric_iron", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomDTO.prototype, "television", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomDTO.prototype, "air_conditioner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomDTO.prototype, "wifi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomDTO.prototype, "stove", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomDTO.prototype, "parking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomDTO.prototype, "swimming_pool", void 0);
class RoomUpdateDTO extends RoomDTO {
}
exports.RoomUpdateDTO = RoomUpdateDTO;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomUpdateDTO.prototype, "location_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomUpdateDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomUpdateDTO.prototype, "beds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomUpdateDTO.prototype, "bathrooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomUpdateDTO.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RoomUpdateDTO.prototype, "bedrooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "washing_machine", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "electric_iron", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "television", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "air_conditioner", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "wifi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "stove", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "parking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['true', 'false'] }),
    __metadata("design:type", String)
], RoomUpdateDTO.prototype, "swimming_pool", void 0);
//# sourceMappingURL=dto.js.map