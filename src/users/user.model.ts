import { Column, DataType, Model, Sequelize, Table } from "sequelize-typescript";

interface AttrUser{
    email : string,
    password : string
}

@Table({tableName : 'users'})
export class User extends Model<User, AttrUser>{
    @Column({type : DataType.INTEGER, unique : true, autoIncrement : true, primaryKey : true})
    declare id:number;
    //id:number;

    @Column({type : DataType.STRING, unique : true, allowNull : false})
    declare email : string;

    @Column({type : DataType.STRING, allowNull : false})
    declare password : string;

    @Column({type : DataType.BOOLEAN, defaultValue : false})
    declare banned : boolean;

    @Column({type : DataType.STRING, allowNull : true})
    declare bannReason : string;
}
