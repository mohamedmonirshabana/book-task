import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { request } from 'express';
import * as jwt from 'jsonwebtoken';
import { Observable } from 'rxjs';
import {jwt_SECRET } from '../share/content';

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean  {
        const host = context.switchToHttp(),
        request = host.getRequest();

        const user = request["user"];
        console.log(user);

        if(!user){
            throw new UnauthorizedException();
        }

        return true;
    }
    
}