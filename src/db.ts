import { Sequelize } from "sequelize-typescript";
import { Post } from "./posts/post.model";
import { Role } from "./roles/role.model";
import { UsersRoles } from "./roles/users-roles.model";

import { User } from "./users/user.model";

const db = new Sequelize(
  'nxt',  'postgres',  'root',
  {
      dialect : 'postgres',
      host : 'localhost',
      port : 5432,
//      logging : false,
     models : [User, Role, Post, UsersRoles]      
     // models : [User, Post]      
  }
  
);
export default db;


