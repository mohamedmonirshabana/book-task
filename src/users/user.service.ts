import { Injectable } from '@nestjs/common';
import { CreateUser, User } from './interface/createuser.interface';
// import { UserRepo } from './repo/user.repo';
import { CreateUserdto } from './dto/createuser.dto';
import { UpdateUserdto } from './dto/updateuser.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { userCollection } from '../share/content';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(userCollection)private readonly _user: Model<User>
        // private readonly _userRpo: UserRepo
    ){}

    async create(userDto: CreateUserdto): Promise<User>{

        const result = await this._user.create({
            ...userDto,
            name: `${userDto.firstname} ${userDto.lastname}`
        });
        return result;

        // const result = await this._userRpo.create({
        //     ...CreateUserdto,
        //     name: `${userDto.firstname} ${userDto.lastname}`
        // });
        // return result;
    }

    async login(useremail:string, password:string){
        const result = await this._user.find({email:useremail, password: password});
        if(result){
            return true;
        }
        return false;
    }

    async updateUser(id:string, userdata: UpdateUserdto){
        const result = await this._user.findByIdAndUpdate(id, userdata);
        return result;
    }

    async updatePassword(id:string, oldPassword:string, newPassword:string){
        const userData = await this._user.findById(id);

        if(userData.password == oldPassword){
            userData.password = newPassword;
            await userData.save();
        }
        
    }

    // async findEmail(usermail:string): Promise<Boolean>{
    //     const result = await this._userRpo.findOne(email, usermail);
    // }
}