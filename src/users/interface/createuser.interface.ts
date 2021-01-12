import  { Document } from 'mongoose';

export interface CreateUser{
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    role:string;
}

export interface User extends Document{
    name:string;
    email:string;
    password:string;
    role:string;
}

