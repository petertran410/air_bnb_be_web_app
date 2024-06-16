export declare class LocationDTO {
    id: number;
    address: string;
    city: string;
    country: string;
    photo?: string;
}
export declare class LocationUpdateDTO extends LocationDTO {
    address: string;
    city: string;
    country: string;
}
