import { Sequelize } from "sequelize-typescript";

import { User } from "./users/user.model";

const db = new Sequelize(
  'nxt',  'postgres',  'root',
  {
      dialect : 'postgres',
      host : 'localhost',
      port : 5432,
//      logging : false,
      models : [User]      
  }
  
);
export default db;


