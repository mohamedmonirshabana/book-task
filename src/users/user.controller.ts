import { Controller, Get, Post, Put, Patch, Delete, Body, UnauthorizedException } from '@nestjs/common';
import { UserService } from'./user.service';
import { CreateUserdto } from './dto/createuser.dto';
import { User } from './interface/createuser.interface';
import { TokenUser } from './interface/token.interface';
import { ApiBody, ApiCreatedResponse, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Post('signup')
    @ApiResponse({
        status: 201
    })
    @ApiUnauthorizedResponse({description: 'user Registeration'})
    @ApiBody({type: CreateUserdto})
    async create(@Body() userDto:CreateUserdto ){
        console.log(' UsersData ',userDto);
        const result = await this.userService.create(userDto);
        console.log(result);
        return result
    }

    @Post('login')
    @ApiResponse({description : "Login for user"})
    @ApiUnauthorizedResponse({description: 'Invalid credentionals'})
    @ApiBody({type: LoginDto})
    async login(@Body()log : LoginDto){
        console.log(log);
        const result = await this.userService.login(log.email, log.password);
        console.log(result);
        return result;
        
    }
}