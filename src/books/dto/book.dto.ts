import { IsString, IsNotEmpty, IsDefined, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type: String, description:"Title For Book"})
    title:string;

    @IsBoolean()
    @ApiProperty({type:Boolean, description:"Choose true or false "})
    isPublished:boolean;

    @IsString()
    @ApiProperty({type:String, description:"auther ID"})
    auther:string;
}