export declare class RoomDTO {
    id?: number;
    name: string;
    location_id: number;
    price: number;
    description: string;
    photo?: string;
    beds: number;
    bathrooms: number;
    guests: number;
    bedrooms: number;
    washing_machine: 'true' | 'false';
    electric_iron: 'true' | 'false';
    television: 'true' | 'false';
    air_conditioner: 'true' | 'false';
    wifi: 'true' | 'false';
    stove: 'true' | 'false';
    parking: 'true' | 'false';
    swimming_pool: 'true' | 'false';
}
export declare class RoomUpdateDTO extends RoomDTO {
    name: string;
    location_id: number;
    price: number;
    beds: number;
    bathrooms: number;
    guests: number;
    bedrooms: number;
    washing_machine: 'true' | 'false';
    electric_iron: 'true' | 'false';
    television: 'true' | 'false';
    air_conditioner: 'true' | 'false';
    wifi: 'true' | 'false';
    stove: 'true' | 'false';
    parking: 'true' | 'false';
    swimming_pool: 'true' | 'false';
}
