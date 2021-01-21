import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UserService } from '../users/user.service';
import { JwtModule } from '@nestjs/jwt';
import { PasswordHasherService } from './psaaword.hasher.service';
import { jwt_SECRET } from '../share/content';
import { UserRepo } from '../users/repo/user.repo';

@Module({
    imports:[ PasswordHasherService ,UserRepo, UserService],
    controllers: [AuthController],
    providers:[AuthService, JwtStrategy, UserService,PasswordHasherService, UserRepo],
    exports:[]
})
export class AuthModel{}