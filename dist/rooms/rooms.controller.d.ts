/// <reference types="multer" />
import { RoomsService } from './rooms.service';
import { RoomDTO } from './dto';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    get(id: string, location_id: string, searchKeyword: string, records: string, page: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    getRoomId(id: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    getByLocationId(location_id: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    create(data: RoomDTO, photo: Express.Multer.File): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    update(id: string, data: RoomDTO, photo: Express.Multer.File): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
