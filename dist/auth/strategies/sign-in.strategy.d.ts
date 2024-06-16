import { Strategy } from 'passport-local';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist';
declare const SignInStrategy_base: new (...args: any[]) => Strategy;
export declare class SignInStrategy extends SignInStrategy_base {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UsersService, jwtService: JwtService, configService: ConfigService);
    validate(email: string, password: string): Promise<any>;
}
export {};
