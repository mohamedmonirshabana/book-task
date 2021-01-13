import { IsString, IsEmail, IsDefined, isEmail, Min, isDecimal, isDefined } from 'class-validator';


export class CreateUserdto{

    @IsString()
    firstname:string;

    @IsString()
    lastname:string;

    @IsString()
    @IsEmail()
    email:string;

    @IsString()
    password:string;

    @IsString()
    
    role:string


}