import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BookService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schema/book.schema';
import { bookCollection } from '../share/content';
import { BookRepo } from './repo/book.repo';

@Module({
    imports:[
        MongooseModule.forFeature([{name:bookCollection, schema: BookSchema}]),
     ],
    controllers:[BookController],
    providers:[BookService, BookRepo]
})
export class BookModule{}