import { config } from 'dotenv';
config()
import {  DataSource, DataSourceOptions  } from 'typeorm';




export const datasourceOptions: DataSourceOptions = {

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

const datasource = new DataSource(datasourceOptions);

export default datasource;