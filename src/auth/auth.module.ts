// import { Module } from '@nestjs/common';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { UsersModule } from 'src/users/users.module';
// import { SignInStrategy } from './strategies/sign-in.strategy';
// import { LocalStrategy } from './strategies/local.strategy';
// import { JwtModule } from '@nestjs/jwt';

// @Module({
//   imports: [PassportModule, JwtModule.register({}), UsersModule],
//   controllers: [AuthController],
//   providers: [AuthService, SignInStrategy, LocalStrategy],
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { SignInStrategy } from './strategies/sign-in.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET_KEY'),
        signOptions: { expiresIn: '60m' },
      }),
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, SignInStrategy, LocalStrategy],
})
export class AuthModule {}
