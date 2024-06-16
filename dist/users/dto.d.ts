export declare class UserDTO {
    id?: number;
    avatar?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: Date;
    gender: 'Male' | 'Female' | 'Undefined';
    role: 'Guest' | 'Admin';
}
export declare class UserUpdateDTO {
    name: string;
    email: string;
    phone: string;
    birthday: Date;
    gender: 'Male' | 'Female' | 'Undefined';
    role: 'Guest' | 'Admin';
    avatar: string;
}
export declare class SignUpDTO {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: Date;
    gender: 'Male' | 'Female' | 'Undefined';
}
export declare class SignInDTO {
    email: string;
    password: string;
}
export declare class ChangePasswordDTO {
    oldPassword: string;
    newPassword: string;
    confirmedNewPassword: string;
}
