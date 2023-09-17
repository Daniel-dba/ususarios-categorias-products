import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'project_data_base', // db name
  'postgres', // username
  'postgres', // password
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  }
);
