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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const dto_1 = require("./dto");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("./entities");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async get(id, roomID, records, page) {
        try {
            let data;
            if (id) {
                data = await this.commentsService.findOne(+id);
            }
            else {
                data = await this.commentsService.findAll(+roomID, +records, +page);
            }
            if ((data === null || data === void 0 ? void 0 : data.length) > 0 || data) {
                return {
                    message: 'Successfully!',
                    data: (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Comment, data)),
                };
            }
            else {
                throw new common_1.NotFoundException();
            }
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async create(data) {
        try {
            const comment = await this.commentsService.create(data);
            return { message: 'Successfully posted!', data: comment };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async udpate(id, data) {
        try {
            const comment = await this.commentsService.update(+id, data);
            return { message: 'Successfully updated!', data: comment };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async delete(id) {
        try {
            await this.commentsService.delete(+id);
            return { message: 'Successfully deleted!' };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
};
exports.CommentsController = CommentsController;
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'roomID', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'records', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('roomID')),
    __param(2, (0, common_1.Query)('records')),
    __param(3, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CommentDTO]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CommentDTO]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "udpate", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "delete", null);
exports.CommentsController = CommentsController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, swagger_1.ApiHeader)({ name: 'access_token', required: true }),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
//# sourceMappingURL=comments.controller.js.map