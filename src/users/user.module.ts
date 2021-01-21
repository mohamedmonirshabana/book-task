import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { userCollection } from '../share/content';
import { UserSchema } from './schema/user.Schema';
import { UserController } from './user.controller';
import { PasswordHasherService } from 'src/auth/psaaword.hasher.service';
import { UserRepo } from './repo/user.repo';

@Module({
    imports:[
        MongooseModule.forFeature([{name:userCollection, schema:UserSchema}]),
        
    ],
    controllers:[ UserController ],
    providers:[UserService , PasswordHasherService, UserRepo,UserService],
    exports:[PasswordHasherService, UserRepo,UserService,PasswordHasherService]
})
export class UserModule {}