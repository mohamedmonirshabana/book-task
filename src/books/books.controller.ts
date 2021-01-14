import { Controller , Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from './interface/book.interface';
import { CreateBookDTO } from './dto/book.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiHeader, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('books')
export class BookController{
    constructor(private readonly _bookservice: BookService ){}

    @Post()
    @ApiResponse({description : "Create Book"})
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT')
    @ApiBody({type: CreateBookDTO})
    async createBook(@Body() bookDto: CreateBookDTO): Promise<Book>{
        console.log("Book")
        console.log(bookDto.title);
        return await this._bookservice.createBook(bookDto);
    } 

    @Get(':id')
    @ApiResponse({
        status:200
    })
    @ApiResponse({description : "Get Book by ID"})
    async getBookbyId(@Param('id') id: string ): Promise<Book>{
        return await this._bookservice.findeOneBook(id);
    }

    @Get('bytitle/:title')
    @ApiResponse({
        status:200
    })
    @ApiResponse({description : "Get Book by Title"})
    async getBookByTitle(@Param('title')title:string): Promise<Book[]>{
        return await this._bookservice.findBooksByTitle(title);
    }

    @Get('byauther/:id')
    @ApiResponse({
        status:200
    })
    @ApiResponse({description : "Get Book by Auther"})
    async getBooksByAuther(@Param('id') id: string):Promise<Book[]>{
        return await this._bookservice.findBookByuser(id);
    }

    @Get('ispublish/:publish')
    @ApiResponse({
        status:200
    })
    @ApiResponse({description : "Get Book is Published"})
    async getBookByPublish(@Param('publish')publish:boolean):Promise<Book[]>{
        return await this._bookservice.findPublish(publish);
    }

    @Delete(':id')
    @ApiResponse({
        status:200
    })
    @ApiResponse({description : "Delete Book"})
    async deleteBook(@Param('id')id:string):Promise<Book>{
        return await this._bookservice.delete(id);
    }

    @Put(':id')
    @ApiResponse({
        status:200
    })
    @ApiResponse({description : "Update Book"})
    async updateBook(@Param('id')id:string, @Body() updatebook: CreateBookDTO):Promise<Book>{
        const result = await this._bookservice.update(id, updatebook);
        return result;
    }
}