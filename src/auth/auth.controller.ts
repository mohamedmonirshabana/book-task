import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { LoginDto } from '../users/dto/login.dto';
import { CreateUserdto } from '../users/dto/createuser.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private _userService: UserService,
        private _authService: AuthService
        ){}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    tempAuth(){
        return {auth: 'Works'};
    }
    
    @Post('login')
    async userlogin(@Body() userDTO: LoginDto){
        const user = await this._userService.login(userDTO.email, userDTO.password);
        const payload = {
            email: user.email
        };
        const token = await this._authService.signPayload(payload);
        return token;
    }

    @Post('register')
    async userRegiste(@Body() userDTO: CreateUserdto){
        const user = await this._userService.create(userDTO);
        const payload= {
            email: user.email
        };
        const token = await this._authService.signPayload(payload);
        return token;
    }
}
