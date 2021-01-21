import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUser, User } from './interface/createuser.interface';
import { TokenUser } from './interface/token.interface';
import { UserRepo } from './repo/user.repo';
import { CreateUserdto } from './dto/createuser.dto';
import { UpdateUserdto } from './dto/updateuser.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { userCollection, jwt_SECRET } from '../share/content';
import { PasswordHasherService } from '../auth/psaaword.hasher.service';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class UserService {
    constructor(
        // @InjectModel(userCollection)private readonly _user: Model<User>,
        
        private hash: PasswordHasherService,
        private readonly _userRpo: UserRepo
    ){}

    async create(userDto: CreateUserdto){
        const hsa = await this.hash.hashPassword(userDto.password);
        console.log(hsa);

        const result = await this._userRpo.create({
            ...userDto,
            name: `${userDto.firstname} ${userDto.lastname}`,
            password: hsa
        });
        const token:TokenUser = {
            email: result.email,
            token: jwt.sign({email: result.email, role: result.role, id: result._id}, jwt_SECRET)
        }

        return token;

        // const result = await this._userRpo.create({
        //     ...CreateUserdto,
        //     name: `${userDto.firstname} ${userDto.lastname}`
        // });
        // return result;
    }

    async login(useremail:string, password:string) :Promise<TokenUser> {
        const result = await this._userRpo.findOne({email:useremail});
        if(!result){
             throw new UnauthorizedException('Email not Exist');
        }
        const valid = this.hash.comparePassword(password, result.password);
        if(!valid){
            throw new UnauthorizedException('Password is not correct');
        }
        
        const token:TokenUser = {
            email: result.email,
            token: jwt.sign({email: result.email, role: result.role, id: result._id}, jwt_SECRET)
        }

        return token;
        
        
    }

    // async updateUser(id:string, userdata: UpdateUserdto){
    //     const result = await this._userRpo.update( userdata);
    //     return result;
    // }

    async updatePassword(id:string, oldPassword:string, newPassword:string){
        const userData = await this._userRpo.findById(id);

        if(userData.password == oldPassword){
            userData.password = newPassword;
            await userData.save();
        }
        
    }




    // async findEmail(usermail:string): Promise<Boolean>{
    //     const result = await this._userRpo.findOne(email, usermail);
    // }


    async findByPayload(payload: any){
        const {email} = payload;
        return await this._userRpo.findOne({email: email});
        
    }
}