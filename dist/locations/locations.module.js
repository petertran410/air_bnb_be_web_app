"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsModule = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("./locations.service");
const locations_controller_1 = require("./locations.controller");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = require("path");
let LocationsModule = class LocationsModule {
};
exports.LocationsModule = LocationsModule;
exports.LocationsModule = LocationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: path.join(process.cwd(), 'public', 'imgs'),
                    filename: (req, file, cb) => {
                        cb(null, Date.now() + '_' + file.originalname.replace(' ', ''));
                    },
                }),
            }),
        ],
        controllers: [locations_controller_1.LocationsController],
        providers: [locations_service_1.LocationsService],
    })
], LocationsModule);
//# sourceMappingURL=locations.module.js.map