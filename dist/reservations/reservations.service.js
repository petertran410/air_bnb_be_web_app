"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ReservationsService = class ReservationsService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findAll(userID, searchKeyword, records, page) {
        const data = await this.prisma.reservations.findMany({
            where: {
                OR: (searchKeyword === null || searchKeyword === void 0 ? void 0 : searchKeyword.trim())
                    ? [
                        {
                            reserved_by: {
                                OR: [
                                    { name: { contains: searchKeyword } },
                                    { email: { contains: searchKeyword } },
                                    { phone: { contains: searchKeyword } },
                                ],
                            },
                        },
                    ]
                    : undefined,
                reserved_by_id: userID || undefined,
            },
            include: { reserved_by: true },
            skip: records * (page - 1) || undefined,
            take: records || undefined,
        });
        return data;
    }
    async findOneId(id) {
        const reservation = await this.prisma.reservations.findFirst({
            where: {
                id,
            },
        });
        return reservation;
    }
    async findOneReservation(reserved_by_id) {
        const reservation = await this.prisma.reservations.findFirst({
            where: {
                reserved_by_id,
            },
        });
        return reservation;
    }
    async create(data) {
        const reservation = await this.prisma.reservations.create({ data });
        return reservation;
    }
    async update(id, data) {
        const reservation = await this.prisma.reservations.update({
            where: { id },
            data,
        });
        return reservation;
    }
    async delete(id) {
        const reservation = await this.prisma.reservations.delete({
            where: { id },
        });
        return reservation;
    }
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)()
], ReservationsService);
//# sourceMappingURL=reservations.service.js.map