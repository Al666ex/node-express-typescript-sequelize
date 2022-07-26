import { Sequelize } from "sequelize-typescript";

import { User } from "./users/user.model";

const connection = new Sequelize({
  dialect: "mariadb",
  host: "localhost",
  username: "root",
  password: "root",
  database: "sequelize",
  logging: false,
  models: [User],
});

export default connection;


// PORT=5000
// HOST='localhost'
// DB_PORT=5432
// DB_USER='postgres'
// DB_PASSWORD='root'
// DB_NAME='bend'
