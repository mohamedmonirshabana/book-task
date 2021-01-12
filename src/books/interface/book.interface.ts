import { Document } from 'mongoose';


export interface Book extends Document{
    title:string;
    isPublished:boolean;
    auther:string;
}