import { Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly userService;
    constructor(userService: UsersService);
    validate(decodedToken: any): Promise<any>;
}
export {};
