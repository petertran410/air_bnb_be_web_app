/// <reference types="multer" />
import { LocationsService } from './locations.service';
import { LocationUpdateDTO, LocationDTO } from './dto';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    get(id: string, searchKeyword: string, records: string, page: string): Promise<{
        message: string;
        data: any;
    }>;
    getLocations(id: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    locationSearch(pageIndexParam?: string, pageSizeParam?: string): Promise<{
        message: string;
        data: LocationDTO[];
    }>;
    create(data: LocationDTO, photo: Express.Multer.File): Promise<{
        message: string;
        data: LocationDTO;
    }>;
    update(id: string, data: LocationUpdateDTO, photo: Express.Multer.File): Promise<{
        message: string;
        data: LocationDTO;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
