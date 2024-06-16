"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const express = require("express");
const common_1 = require("@nestjs/common");
const { DOMAIN, PORT } = process.env;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.use(express.static('public'));
    app.useGlobalPipes(new common_1.ValidationPipe({ skipMissingProperties: true }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('CAPSTONE AIRBNB API')
        .setDescription('Ngọc Nhân')
        .build();
    const document = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(PORT, () => {
        console.log(`Server is starting at ${DOMAIN}:${PORT}...`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map