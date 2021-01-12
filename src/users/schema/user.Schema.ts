import { Schema } from 'mongoose';
import { roleEnum } from '../../share/content';

export const UserSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:[roleEnum.auther, roleEnum.user, roleEnum.Admin],
        default: roleEnum.auther
    }
}); 