import { IsString, IsEmail, IsDefined, isEmail, Min, isDecimal, isDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserdto{

    @IsString()
    @IsDefined()
    @ApiProperty({type: String, description:"first Name for user"})
    firstname:string;

    @IsString()
    @IsDefined()
    @ApiProperty({type: String, description:"Last Name for user"})
    lastname:string;

    @IsString()
    @IsEmail()
    @ApiProperty({type: String, description: "Email"})
    email:string;

}