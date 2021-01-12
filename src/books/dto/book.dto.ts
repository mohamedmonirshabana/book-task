import { IsString, IsNotEmpty, IsDefined, IsBoolean } from 'class-validator';

export class CreateBookDTO{
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsBoolean()
    isPublished:boolean;

    @IsString()
    auther:string;
}