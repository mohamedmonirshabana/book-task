import { Controller, Get, Post, Put, Patch, Delete, Body } from '@nestjs/common';
import { UserService } from'./user.service';
import { CreateUserdto } from './dto/createuser.dto';
import { User } from './interface/createuser.interface';

@Controller('/user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Post('signup')
    async create(@Body() userDto:CreateUserdto ): Promise<User>{
        const result = await this.userService.create(userDto);
        return result
    }
}