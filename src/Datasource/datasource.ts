import { config } from 'dotenv';
config()
import {  DataSource, DataSourceOptions  } from 'typeorm';




export const devDatasourceOptions: DataSourceOptions = {

          type: 'mysql',
          host: process.env.HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.USER,
          password: process.env.PASSWORD,
          database: process.env.DATABASE,
          entities: ['**/*.entity.js'],
          migrations: ['./migrations/*.js'],
          logging:true,

}

export const prodDatasourceOptions: DataSourceOptions = {

          type: 'mysql',
          host: process.env.HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.USER,
          password: process.env.PASSWORD,
          database: process.env.DATABASE,
          entities: ['**/*.entity.js'],
          migrations: ['./migrations/*.js'],
          logging:true,

}


const devDatasource = new DataSource(devDatasourceOptions);
const prodDatasource = new DataSource(prodDatasourceOptions);

export default { devDatasource, prodDatasource};
