import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: ('SECRET_KEY'),
    });
  }

  async validate(decodedToken: any) {
    console.log('Decoded token:', decodedToken);
    try {
      const { id } = decodedToken.user.data;
      const validatedUser = await this.userService.findOne(id);
      if (validatedUser) {
        return decodedToken;
      } else {
        console.log("Lỗi ...");
      }
    } catch (err) {
      throw err || new InternalServerErrorException();
    }
  }
}
