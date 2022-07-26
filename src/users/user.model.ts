import { Column, DataType, Model, Sequelize, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize/types";

interface AttrUser{
    email : string,
    password : string
}

@Table({tableName : 'users'})
export class User extends Model<User, AttrUser>{
    @Column({type : DataTypes.INTEGER, unique : true, autoIncrement : true, primaryKey : true})
    declare id:number;

    @Column({type : DataType.STRING, unique : true, allowNull : false})
    email! : string;

    @Column({type : DataType.STRING, allowNull : false})
    password! : string;

    @Column({type : DataType.BOOLEAN, defaultValue : false})
    banned! : boolean;

    @Column({type : DataType.STRING, allowNull : true})
    bannReason! : string;
}
