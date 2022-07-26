import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Sequelize, Table } from "sequelize-typescript";
import { Post } from "../posts/post.model";
import { Role } from "../roles/role.model";
import { UsersRoles } from "../roles/users-roles.model";

interface AttrUser{
    readonly email : string;
    readonly password : string
}

@Table({tableName : 'users'})
export class User extends Model<User, AttrUser>{
    @Column({type : DataType.INTEGER, unique : true, autoIncrement : true, primaryKey : true})
    declare id:number;    

    @Column({type : DataType.STRING, unique : true, allowNull : false})
    declare email : string;

    @Column({type : DataType.STRING, allowNull : false})
    declare password : string;

    @Column({type : DataType.BOOLEAN, defaultValue : false})
    declare banned : boolean;

    @Column({type : DataType.STRING, allowNull : true})
    declare bannReason : string;

    @BelongsToMany(() => Role, () => UsersRoles)
    declare roles : Role[]

    @HasMany(() => Post)
    declare posts : Post[]
}
