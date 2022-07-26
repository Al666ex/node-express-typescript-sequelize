import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/user.model";
import { Role } from "./role.model";

@Table({tableName : 'users-roles', createdAt : false, updatedAt : false})
export class UsersRoles extends Model<UsersRoles>{
    @Column({type : DataType.INTEGER, unique : true, autoIncrement : true, primaryKey : true})
    declare id : number;

    @Column({type : DataType.INTEGER, allowNull : false})
    @ForeignKey(() => User)
    declare userId : number;

    @Column({type : DataType.INTEGER, allowNull : false})
    @ForeignKey(() => Role)
    declare roleId : number
}