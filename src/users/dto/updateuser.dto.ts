import { IsString, IsEmail, IsDefined, isEmail, Min, isDecimal, isDefined } from 'class-validator';

export class UpdateUserdto{

    @IsString()
    @IsDefined()
    firstname:string;

    @IsString()
    @IsDefined()
    lastname:string;

    @IsString()
    @IsEmail()
    email:string;

}