import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { jwt_SECRET } from '../share/content';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService
    ){
        super({
            jwtForRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwt_SECRET
        });
    }

    async validate(payload: any, done: VerifiedCallback){

        const user = await this.authService.validateUser(payload);
        if(!user){
            return done(
                new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED),
                false
            );
        }

        return done(null, user, payload.iat )
    }
}