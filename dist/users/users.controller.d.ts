/// <reference types="multer" />
import { UsersService } from './users.service';
import { UserDTO, UserUpdateDTO } from './dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    get(id: string, searchKeyword: string, records: string, page: string): Promise<{
        message: string;
        data: any;
    }>;
    getUser(id: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    getUserId(id: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    getSearchName(name: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    create(data: UserDTO, avatar: Express.Multer.File): Promise<{
        message: string;
        data: (role?: string) => Record<string, any>;
    }>;
    update(id: string, data: UserUpdateDTO, avatar: Express.Multer.File): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
