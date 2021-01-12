// import { Injectable } from '@nestjs/common';
// import { Document, Model, FilterQuery } from 'mongoose';

// @Injectable()
// export abstract class BaseRepo<T>{
//     constructor(private _model: Model<T & Document>){}

//     get model(){
//         return this._model;
//     }

//     async create(data: T | any): Promise<T>{
//         const result = await this._model.create(data);
//         return result;
//     }

//     async update(id:string, data: T): Promise<T>{
//         const result = await this._model.findByIdAndUpdate(id, data);
//         return result;
//     }

//     async delete(id:string): Promise<T>{
//         return await this._model.findByIdAndDelete(id);
//     }

//     async findById(id:string): Promise<T>{
//         return await this._model.findById(id);
//     }

//     async findOne(
//         property:Partial<Record<keyof T, unknown>>, 
//         value:string | Record<string, unknown> = {},
//         optional: Record<string, unknown>= {}
//         ):Promise<T>{

//         return await this._model.findOne( property as FilterQuery<T>, value, optional );
//     }

// }