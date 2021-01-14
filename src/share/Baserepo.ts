import { Injectable } from '@nestjs/common';
import { Document, Model } from 'mongoose';
import { IBaseRepo } from './base.repo.interface';

@Injectable()
export abstract class BaseRepo<T> implements IBaseRepo<T> {
    constructor(private _model: Model<T & Document>){}
    get model(){
        return this._model;
    }

    
    public async update(data: Partial<T> | any): Promise<T> {
        const documentData= await this._model.updateOne(data);
        return documentData;
    }
   
    public async find(query: Partial<T> | any= {}): Promise<T[]> {
        const findResult = await this._model.find(query);
        return findResult;
    }
    public async findByIdAndDelete(id: string): Promise<T> {
        const dataDelete = await this._model.findByIdAndRemove(id);
        return dataDelete;     
    }

    public async findById(id: string):Promise<T>{
        const resultData = await this._model.findById(id);
        return resultData;
    }


    public async create(data: T | any): Promise<T>{
        const result = await this._model.create(data);
        return result;
    }


    public async findOne(query:Partial<T> | any={}):Promise<T>{
        const result = await this._model.findOne(query);
        return result;
    }

}