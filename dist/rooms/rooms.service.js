"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let RoomsService = class RoomsService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findAll(location_id, searchKeyword, records, page) {
        const data = await this.prisma.rooms.findMany({
            where: {
                OR: (searchKeyword === null || searchKeyword === void 0 ? void 0 : searchKeyword.trim())
                    ? [
                        { name: { contains: searchKeyword } },
                        {
                            location: {
                                OR: [
                                    { address: { contains: searchKeyword } },
                                    { city: { contains: searchKeyword } },
                                    { country: { contains: searchKeyword } },
                                ],
                            },
                        },
                    ]
                    : undefined,
                location_id: location_id || undefined,
            },
            include: { location: true },
            skip: records * (page - 1) || undefined,
            take: records || undefined,
        });
        return data;
    }
    async findOne(id) {
        const room = await this.prisma.rooms.findUnique({
            where: { id },
            include: { location: true },
        });
        return room;
    }
    async findOneByLocation(location_id) {
        const data = await this.prisma.rooms.findMany({ where: { location_id } });
        return data;
    }
    async create(data) {
        const room = await this.prisma.rooms.create({
            data,
            include: { location: true },
        });
        return room;
    }
    async update(id, data) {
        const room = await this.prisma.rooms.update({
            where: { id },
            data,
            include: { location: true },
        });
        return room;
    }
    async delete(id) {
        const room = await this.prisma.rooms.delete({ where: { id } });
        return room;
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)()
], RoomsService);
//# sourceMappingURL=rooms.service.js.map