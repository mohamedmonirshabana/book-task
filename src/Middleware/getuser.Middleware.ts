import { HttpService, Injectable, NestMiddleware, ExecutionContext, HttpException, HttpStatus , Headers } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';
import { authorize } from "passport";
import { jwt_SECRET } from '../share/content';
import { Request, Response } from 'express'


@Injectable()
export class GetUserMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: () => void){
        console.log("req auther ",  req.headers);
        const authJwtToken  = req.headers.authorization;
        if(!authJwtToken){
            next();
            return;
        }

        try{
            const pureToken = authJwtToken.split(' ')[1]
            const user = jwt.verify(pureToken, jwt_SECRET);
            if(user){
                console.log("Found user", user);
                req["user"]= user;
            }
        }
        catch(err){
            console.error(err);
        }
        next();
    }
}