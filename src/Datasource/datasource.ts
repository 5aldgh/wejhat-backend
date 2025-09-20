import { config } from 'dotenv';
config()
import {  DataSource, DataSourceOptions  } from 'typeorm';




export const devDatasourceOptions: DataSourceOptions = {

          type: 'mysql',
          host: process.env.DEV_HOST,
          port: Number(process.env.DEV_DB_PORT),
          username: process.env.DEV_USER,
          password: process.env.DEV_PASSWORD,
          database: process.env.DEV_DATABASE,
          entities: ['**/*.entity.js'],
          migrations: ['./migrations/*.js'],
          logging:true,

}

export const prodDatasourceOptions: DataSourceOptions = {

          type: 'mysql',
          host: process.env.PROD_HOST,
          port: Number(process.env.PROD_DB_PORT),
          username: process.env.PROD_USER,
          password: process.env.PROD_PASSWORD,
          database: process.env.PROD_DATABASE,
          entities: ['**/*.entity.js'],
          migrations: ['./migrations/*.js'],
          logging:true,

}


const devDatasource = new DataSource(devDatasourceOptions);
const prodDatasource = new DataSource(prodDatasourceOptions);

export default { devDatasource, prodDatasource};
