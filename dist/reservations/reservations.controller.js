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
exports.ReservationsController = void 0;
const common_1 = require("@nestjs/common");
const reservations_service_1 = require("./reservations.service");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("./entities");
let ReservationsController = class ReservationsController {
    constructor(reservationsService) {
        this.reservationsService = reservationsService;
    }
    async get(id, guestID, searchKeyword, records, page) {
        try {
            let data;
            if (id) {
                data = await this.reservationsService.findOneId(+id);
            }
            else {
                data = await this.reservationsService.findAll(+guestID, searchKeyword, +records, +page);
            }
            if ((data === null || data === void 0 ? void 0 : data.length) > 0 || data) {
                return {
                    message: 'Successfully!',
                    data: (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Reservation, data)),
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
    async getReservation(id) {
        try {
            const reservation = await this.reservationsService.findOneId(+id);
            if (!reservation) {
                throw new common_1.NotFoundException('Reservaion not found');
            }
            const data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Reservation, reservation));
            return { message: 'Successfully!', data };
        }
        catch (err) {
            throw new err;
        }
    }
    async getReservationById(reserved_by_id) {
        try {
            const reservation = await this.reservationsService.findOneReservation(+reserved_by_id);
            if (!reservation) {
                throw new common_1.NotFoundException('Reservation not found');
            }
            const data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToClass)(entities_1.Reservation, reservation));
            return { message: 'Successfully!', data };
        }
        catch (_a) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async create(data) {
        try {
            const reservation = await this.reservationsService.create(data);
            return {
                message: 'A new reservation is successfully created!',
                data: reservation,
            };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async update(id, data) {
        try {
            const reservation = await this.reservationsService.update(+id, data);
            return { message: 'Successfully updated!', data: reservation };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
    async delete(id) {
        try {
            await this.reservationsService.delete(+id);
            return { message: 'Successfully deleted!' };
        }
        catch (err) {
            throw err || new common_1.InternalServerErrorException();
        }
    }
};
exports.ReservationsController = ReservationsController;
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'guestID', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'records', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('guestID')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('records')),
    __param(4, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "getReservation", null);
__decorate([
    (0, common_1.Get)('reservation-by-id/:reserved_by_id'),
    __param(0, (0, common_1.Param)('reserved_by_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "getReservationById", null);
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ReservationDTO]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.ReservationUpdateDTO]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "delete", null);
exports.ReservationsController = ReservationsController = __decorate([
    (0, swagger_1.ApiTags)('Reservations'),
    (0, swagger_1.ApiHeader)({ name: 'access_token', required: true }),
    (0, common_1.Controller)('reservations'),
    __metadata("design:paramtypes", [reservations_service_1.ReservationsService])
], ReservationsController);
//# sourceMappingURL=reservations.controller.js.map