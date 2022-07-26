import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../users/user.model";
import { UsersRoles } from "./users-roles.model";

interface AttrRole{
    readonly value : string;
    readonly description : string;
}

@Table({tableName : 'roles'})
export class Role extends Model<Role, AttrRole>{
    @Column({type : DataType.INTEGER, unique : true, autoIncrement : true, primaryKey : true})
    declare id:number;    

    @Column({type : DataType.STRING, unique : true, allowNull : false})
    declare value : string;    

    @Column({type : DataType.STRING, unique : true, allowNull : false})
    declare description : string;
    
    @BelongsToMany(() => User, () => UsersRoles)
    declare users : User[]
}    
