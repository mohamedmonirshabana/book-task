import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserService } from '../users/user.service';
import {jwt_SECRET} from '../share/content';
import { PasswordHasherService } from './psaaword.hasher.service';
import { UserRepo } from '../users/repo/user.repo';

@Injectable()
export class AuthService {
    constructor(
        private readonly _userService: UserService,
        private readonly _passwordHash: PasswordHasherService,
        private readonly _repo: UserRepo
        ){}


    public async signPayload(payload: any){
        return sign(payload, jwt_SECRET, {expiresIn: '12h'});
    }

    async validateUser(payload: any){
        return await this._userService.findByPayload(payload);
    }
}
