import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { User } from 'src/users/entities';
import { UsersService } from 'src/users/users.service';
export declare class CheckExistencePipe implements PipeTransform {
    private readonly usersService;
    constructor(usersService: UsersService);
    transform(user: User, metadata: ArgumentMetadata): Promise<User>;
}
export declare class asas {
}
