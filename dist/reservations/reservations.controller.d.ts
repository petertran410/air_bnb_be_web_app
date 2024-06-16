import { ReservationsService } from './reservations.service';
import { ReservationDTO, ReservationUpdateDTO } from './dto';
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    get(id: string, guestID: string, searchKeyword: string, records: string, page: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    getReservation(id: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    getReservationById(reserved_by_id: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    create(data: ReservationDTO): Promise<{
        message: string;
        data: ReservationDTO;
    }>;
    update(id: string, data: ReservationUpdateDTO): Promise<{
        message: string;
        data: ReservationDTO;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
