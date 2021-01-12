import * as mongoose from 'mongoose';
import { userCollection } from '../../share/content';

export const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    isPublished:{
        type:Boolean,
        required:true,
        default:true
    },
    auther:{
        type: mongoose.Types.ObjectId,
        required:true,
        ref:userCollection
    }
    
},{timestamps: true});