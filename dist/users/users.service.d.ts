import { User } from './entities';
import { UserUpdateDTO, UserDTO } from './dto';
export declare class UsersService {
    private readonly prisma;
    findAll(searchKeyword: string, records: number, page: number): Promise<UserDTO[]>;
    findOne(id: number): Promise<UserDTO>;
    searchName(name: string): Promise<UserDTO>;
    checkExistence({ email, phone }: User): Promise<UserDTO>;
    validate(email: string, password: string): Promise<UserDTO | Error>;
    create(data: UserDTO): Promise<UserDTO>;
    update(id: number, data: UserUpdateDTO): Promise<UserDTO>;
    changePassword(id: number, oldPassword: string, newPassword: string): Promise<UserDTO | Error>;
    delete(id: number): Promise<UserDTO | Error>;
}
