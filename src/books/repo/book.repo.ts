import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { bookCollection } from '../../share/content';
import { BaseRepo } from '../../share/Baserepo';
import { Book }  from '../interface/book.interface';

@Injectable()
export class BookRepo extends BaseRepo<Book>{
    constructor(@InjectModel(bookCollection) private readonly _bookModel: Model<Book>){
        super(_bookModel);
    }
}