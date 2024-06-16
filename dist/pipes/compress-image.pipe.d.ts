/// <reference types="multer" />
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class CompressImagePipe implements PipeTransform {
    transform(image: Express.Multer.File, metadata: ArgumentMetadata): Promise<Express.Multer.File>;
}
