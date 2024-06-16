import { LocationUpdateDTO, LocationDTO } from './dto';
export declare class LocationsService {
    private readonly prisma;
    findAll(searchKeyword: string, records: number, page: number): Promise<LocationDTO[]>;
    findOne(id: number): Promise<LocationDTO>;
    create(data: LocationDTO): Promise<LocationDTO>;
    update(id: number, data: LocationUpdateDTO): Promise<LocationDTO>;
    delete(id: number): Promise<LocationDTO>;
    searchLocations(pageIndex: number, pageSize: number): Promise<LocationDTO[]>;
}
