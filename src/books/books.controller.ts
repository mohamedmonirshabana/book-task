import { Controller , Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from './interface/book.interface';
import { CreateBookDTO } from './dto/book.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('books')
export class BookController{
    constructor(private readonly _bookservice: BookService ){}

    @Post()
    @UseGuards(AuthGuard)
    async createBook(@Body() bookDto: CreateBookDTO): Promise<Book>{
        return await this._bookservice.createBook(bookDto);
    } 

    @Get(':id')
    async getBookbyId(@Param('id') id: string ): Promise<Book>{
        return await this._bookservice.findeOneBook(id);
    }

    @Get('bytitle/:title')
    async getBookByTitle(@Param('title')title:string): Promise<Book[]>{
        return await this._bookservice.findBooksByTitle(title);
    }

    @Get('byauther/:id')
    async getBooksByAuther(@Param('id') id: string):Promise<Book[]>{
        return await this._bookservice.findBookByuser(id);
    }

    @Get('ispublish/:publish')
    async getBookByPublish(@Param('publish')publish:boolean):Promise<Book[]>{
        return await this._bookservice.findPublish(publish);
    }

    @Delete(':id')
    async deleteBook(@Param('id')id:string):Promise<Book>{
        return await this._bookservice.delete(id);
    }

    @Put(':id')
    async updateBook(@Param('id')id:string, @Body() updatebook: CreateBookDTO):Promise<Book>{
        const result = await this._bookservice.update(id, updatebook);
        return result;
    }
}