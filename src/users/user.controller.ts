import { Controller, Get, Post, Put, Patch, Delete, Body, UnauthorizedException } from '@nestjs/common';
import { UserService } from'./user.service';
import { CreateUserdto } from './dto/createuser.dto';
import { User } from './interface/createuser.interface';
import { TokenUser } from './interface/token.interface';

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Post('signup')
    async create(@Body() userDto:CreateUserdto ){
        console.log(' UsersData ',userDto);
        const result = await this.userService.create(userDto);
        console.log(result);
        return result
    }

    @Post('login')
    async login(@Body('email') email:string, @Body('password') passwordPlan:string){
        const result = await this.userService.login(email, passwordPlan);
        return result;
        
    }
}