import { ReservationDTO, ReservationUpdateDTO } from './dto';
export declare class ReservationsService {
    private readonly prisma;
    findAll(userID: number, searchKeyword: string, records: number, page: number): Promise<ReservationDTO[]>;
    findOneId(id: number): Promise<ReservationDTO>;
    findOneReservation(reserved_by_id: number): Promise<ReservationDTO>;
    create(data: ReservationDTO): Promise<ReservationDTO>;
    update(id: number, data: ReservationUpdateDTO): Promise<ReservationDTO>;
    delete(id: number): Promise<ReservationDTO>;
}
