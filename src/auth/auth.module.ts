import { Module , forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UserService } from '../users/user.service';
import { JwtModule } from '@nestjs/jwt';
import { PasswordHasherService } from './psaaword.hasher.service';
import { jwt_SECRET } from '../share/content';
import { UserRepo } from '../users/repo/user.repo';
import { UserModule } from '../users/user.module';

@Module({
    imports:[  UserModule ],
    controllers: [AuthController],
    providers:[AuthService],
    exports:[]
})
export class AuthModel{}