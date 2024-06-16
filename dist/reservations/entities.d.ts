import { User } from 'src/users/entities';
export declare class Reservation {
    id: number;
    reserved_by_id: number;
    reserved_by: User;
    room_id: number;
    guests: number;
    arrival: Date;
    departure: Date;
}
