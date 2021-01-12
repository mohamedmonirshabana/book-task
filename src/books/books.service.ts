import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import{ bookCollection } from '../share/content';
import { Book } from './interface/book.interface';
import { CreateBookDTO } from './dto/book.dto';
import { userCollection } from '../share/content';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(bookCollection) private readonly _book: Model<Book> 
    ){}

    async createBook(bookdata: CreateBookDTO): Promise<Book>{
        return await this._book.create(bookdata);

    }

    async update(id:string, updateData: CreateBookDTO): Promise<Book>{
        const result = await this._book.findByIdAndUpdate(id, updateData);
        return result;
    }

    async delete(id:string): Promise<Book>{
        const result = await this._book.findById(id);
        return result;
    }

    async findBooksByTitle(title:string): Promise<Book[]>{
        const result = await this._book.find({title:{$regex:".*title.*"} });
        return result;
    }

    async findeOneBook(id: string): Promise<Book>{
        return await this._book.findById(id);
    }
    async findBookByuser(userID:string):Promise<Book[]>{
        return await this._book.find({auther:userID}).populate(userCollection, 'name').select('title');
    }

    async findPublish(publish: boolean): Promise<Book[]>{
        return await this._book.find({isPublished: publish});
    }
}