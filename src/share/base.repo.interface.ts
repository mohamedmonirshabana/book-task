
export interface IBaseRepo<T>{
    model:any;
    create(data:any):Promise<T>;

    update(data:any):Promise<T>;

    // delete(data):Promise<T>;

    find(query:Partial<T>):Promise<T[]>;

    findOne(query:Partial<T>):Promise<T>;

    findById(id:string):Promise<T>;

    findByIdAndDelete(id:string):Promise<T>;
}