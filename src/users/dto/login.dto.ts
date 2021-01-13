import { IsString, IsEmail, IsDefined, isEmail, Min, isDecimal, isDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto{
    @IsString()
    @IsEmail()
    @ApiProperty({type:String, description:"user Email"})
    email:string;

    @IsString()
    @ApiProperty({type:String, description:"user Password"})
    password:string;
}