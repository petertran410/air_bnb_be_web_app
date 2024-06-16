export declare class User {
    id?: number;
    avatar?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: Date;
    gender: 'Male' | 'Female' | 'Undefined';
    role?: 'Guest' | 'Admin';
}
