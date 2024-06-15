// import {
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';

// @Injectable()
// export class LocalAuthGuard extends AuthGuard('local') {
//   canActivate(context: ExecutionContext) {
//     return super.canActivate(context);
//   }

//   handleRequest(err: any, decodedToken: any, info: any) {
//     if (err || !decodedToken) {
//       throw (
//         err ||
//         new UnauthorizedException('Please sign in or create new account!')
//       );
//     } else {
//       return decodedToken;
//     }
//   }
// }

import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    if (!user) {
      // throw (
      //   err ||
      //   new UnauthorizedException('Please sign in or create a new account!')
      // );
      console.log("Lỗi không tìm thấy user");
    } 
    else {
      console.log("Đã tìm thấy user");
      return user;
    }
    
  }
}
