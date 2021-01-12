import { IsString, IsEmail, IsDefined, isEmail, Min, isDecimal, isDefined } from 'class-validator';


export class CreateUserdto{

    @IsString()
    @IsDefined()
    firstname:string;

    @IsString()
    @IsDefined()
    lastname:string;

    @IsString()
    @IsEmail()
    email:string;

    @IsString()
    @Min(8)
    @IsDefined()
    password:string;

    @IsString()
    @IsDefined()
    role:string


}