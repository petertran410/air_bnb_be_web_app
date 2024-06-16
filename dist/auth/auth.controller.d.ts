/// <reference types="passport" />
import { AuthService } from './auth.service';
import { SignInDTO, SignUpDTO } from 'src/users/dto';
import { UsersService } from 'src/users/users.service';
import { Request as Req } from 'express';
import { ChangePasswordDTO } from '../users/dto';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    signIn(user: SignInDTO, req: Req): Promise<Express.User>;
    signUp(data: SignUpDTO): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    changePassword(id: string, data: ChangePasswordDTO): Promise<{
        message: string;
    }>;
}
