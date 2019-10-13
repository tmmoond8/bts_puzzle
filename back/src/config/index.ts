require('dotenv').config();

const {
  MYSQL_USER,
  SEQUELIZE_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PASSWORD
} = process.env;

export const config = {
  development: {
    username: MYSQL_USER,
    password: SEQUELIZE_PASSWORD,
    database: MYSQL_DATABASE,
    host: '127.0.0.1',
    dialect: MYSQL_PASSWORD,
  },
  production: {
    username: MYSQL_USER,
    password: SEQUELIZE_PASSWORD,
    database: MYSQL_DATABASE,
    host: '127.0.0.1',
    dialect: MYSQL_PASSWORD,
    logging: false,
  },
};