import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import{ bookCollection } from '../share/content';
import { Book } from './interface/book.interface';
import { CreateBookDTO } from './dto/book.dto';
import { userCollection } from '../share/content';
import { BookRepo } from './repo/book.repo';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(bookCollection) private readonly _book: Model<Book> ,
        private readonly _bookRepo: BookRepo
    ){}

    async create(bookdata: CreateBookDTO): Promise<Book>{
        return await this._bookRepo.create({...bookdata});
    }

    async update(id:string, updateData: CreateBookDTO): Promise<Book>{
        const result = await this._bookRepo.update( {...updateData});
        return result;
    }

    async delete(id:string): Promise<Book>{
        const result = await this._bookRepo.findByIdAndDelete(id);
        return result;
    }

    async findBooksByTitle(title:string): Promise<Book[]>{
        const result = await this._book.find({title:{$regex:".*title.*"} });
        return result;
    }

    async findeById(id: string): Promise<Book>{
        return await this._bookRepo.findById(id);
    }
    async findBookByuser(userID:string):Promise<Book[]>{
        return await this._book.find({auther:userID}).populate(userCollection, 'name').select('title');
    }

    async findPublish(publish: boolean): Promise<Book[]>{
        return await this._book.find({isPublished: publish});
    }
}