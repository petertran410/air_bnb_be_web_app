export declare class ReservationDTO {
    id?: number;
    reserved_by_id: number;
    room_id: number;
    guests: number;
    arrival: Date;
    departure: Date;
}
export declare class ReservationUpdateDTO extends ReservationDTO {
    reserved_by_id: number;
    room_id: number;
    guests: number;
    arrival: Date;
    departure: Date;
}
