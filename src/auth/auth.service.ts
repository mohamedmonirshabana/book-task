import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserService } from '../users/user.service';
import {jwt_SECRET} from '../share/content';
import { PasswordHasherService } from './psaaword.hasher.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject()   
        private _userService: UserService){
    }


    public async signPayload(payload: any){
        return sign(payload, jwt_SECRET, {expiresIn: '12h'});
    }

    async validateUser(payload: any){
        return await this._userService.findByPayload(payload);
    }
}
