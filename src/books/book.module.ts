import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BookService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schema/book.schema';
import { bookCollection } from '../share/content';

@Module({
    imports:[
        MongooseModule.forFeature([{name:bookCollection, schema: BookSchema}]),
     ],
    controllers:[BookController],
    providers:[BookService]
})
export class BookModule{}