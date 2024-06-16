"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findAll(searchKeyword, records, page) {
        const data = await this.prisma.users.findMany({
            where: (searchKeyword === null || searchKeyword === void 0 ? void 0 : searchKeyword.trim()) && {
                OR: [
                    {
                        name: {
                            contains: searchKeyword,
                        },
                    },
                    {
                        email: {
                            contains: searchKeyword,
                        },
                    },
                    {
                        phone: {
                            contains: searchKeyword,
                        },
                    },
                ],
            },
            skip: records * (page - 1) || undefined,
            take: records || undefined,
        });
        return data;
    }
    async findOne(id) {
        const user = await this.prisma.users.findUnique({ where: { id } });
        return user;
    }
    async searchName(name) {
        const searchName = await this.prisma.users.findFirst({
            where: { name },
        });
        return searchName;
    }
    async checkExistence({ email, phone }) {
        const user = await this.prisma.users.findFirst({
            where: {
                OR: [{ email }, { phone }],
            },
        });
        return user;
    }
    async validate(email, password) {
        const user = await this.prisma.users.findFirst({
            where: { email },
        });
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                return user;
            }
            else {
                throw new common_1.UnauthorizedException('Incorrect email or password!');
            }
        }
        else {
            return null;
        }
    }
    async create(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await this.prisma.users.create({
            data: Object.assign(Object.assign({}, data), { password: hashedPassword }),
        });
        return user;
    }
    async update(id, data) {
        const user = await this.prisma.users.update({
            where: { id },
            data,
        });
        return user;
    }
    async changePassword(id, oldPassword, newPassword) {
        const user = await this.prisma.users.findUnique({ where: { id } });
        if (user) {
            if (await bcrypt.compare(oldPassword, user.password)) {
                const hashedNewPassword = await bcrypt.hash(newPassword, 10);
                const updatedUser = await this.prisma.users.update({
                    where: { id },
                    data: { password: hashedNewPassword },
                });
                return updatedUser;
            }
            else {
                throw new common_1.UnauthorizedException('Incorrect password!');
            }
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
    async delete(id) {
        const isExisted = await this.findOne(id);
        if (isExisted) {
            const user = await this.prisma.users.delete({ where: { id } });
            return user;
        }
        else
            throw new common_1.NotFoundException();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map