import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userCollection } from '../../share/content';
import { BaseRepo } from '../../share/Baserepo';
import { User } from '../interface/createuser.interface';

@Injectable()
export class UserRepo extends  BaseRepo<User>{

    constructor(@InjectModel(userCollection) private readonly _userModel: Model<User> ){
        super(_userModel);
    }
}