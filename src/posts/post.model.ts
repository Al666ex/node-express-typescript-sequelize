import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/user.model";

interface AttrPost{
    readonly title : string;
    readonly content : string;
    readonly userId : number
}

@Table({tableName : 'posts'})
export class Post extends Model<Post, AttrPost>{
    @Column({type : DataType.INTEGER, unique : true, autoIncrement : true, primaryKey : true})
    declare id : number;

    @Column({type : DataType.STRING, unique : true, allowNull : false})
    declare title : string;

    @Column({type : DataType.STRING, allowNull : false})
    declare context : string;

    @Column({type : DataType.STRING, defaultValue : 'public'})
    declare status : string;

    @ForeignKey(() => User)
    @Column({type : DataType.INTEGER})
    declare userId : number;

    @BelongsTo(() => User)
    declare author : User




    // @BelongsTo(() => User)
    // declare author : User

}