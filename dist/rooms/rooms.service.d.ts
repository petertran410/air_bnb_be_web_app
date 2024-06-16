import { RoomDTO, RoomUpdateDTO } from './dto';
export declare class RoomsService {
    private readonly prisma;
    findAll(location_id: number, searchKeyword: string, records: number, page: number): Promise<RoomDTO[]>;
    findOne(id: number): Promise<RoomDTO>;
    findOneByLocation(location_id: number): Promise<RoomDTO[]>;
    create(data: RoomDTO): Promise<RoomDTO>;
    update(id: number, data: RoomUpdateDTO): Promise<RoomDTO>;
    delete(id: number): Promise<RoomDTO>;
}
