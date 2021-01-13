import { IsString, IsEmail, IsDefined, isEmail, Min, isDecimal, isDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserdto{

    @IsString()
    @ApiProperty({type:String, description:"user First Name"})
    firstname:string;

    @IsString()
    @ApiProperty({type:String})
    lastname:string;

    @IsString()
    @IsEmail()
    @ApiProperty({type:String})
    email:string;

    @IsString()
    @ApiProperty({type:String})
    password:string;

    @IsString()
    
    role:string


}