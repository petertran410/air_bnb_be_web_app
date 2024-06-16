"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let CommentsService = class CommentsService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findAll(roomID, records, page) {
        const data = await this.prisma.comments.findMany({
            where: { room_id: roomID || undefined },
            include: { created_by: true, room: true },
            skip: records * (page - 1) || undefined,
            take: records || undefined,
        });
        return data;
    }
    async findOne(id) {
        const comment = await this.prisma.comments.findFirst({
            where: { id },
        });
        return comment;
    }
    async create(data) {
        const comment = await this.prisma.comments.create({ data });
        return comment;
    }
    async update(id, data) {
        const comment = await this.prisma.comments.update({
            where: { id },
            data,
        });
        return comment;
    }
    async delete(id) {
        const comment = await this.prisma.comments.delete({
            where: { id },
        });
        return comment;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)()
], CommentsService);
//# sourceMappingURL=comments.service.js.map