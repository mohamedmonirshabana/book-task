import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { userCollection } from '../share/content';
import { UserSchema } from './schema/user.Schema';
import { UserController } from './user.controller';

@Module({
    imports:[
        MongooseModule.forFeature([{name:userCollection, schema:UserSchema}])
    ],
    controllers:[ UserController ],
    providers:[UserService]
})
export class UserModule {}