import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../cities/city.entity';
// import { AppDataSource } from '../datasource';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(@InjectRepository(City) private repo: Repository<City>) {}
  // constructor(private dataSource: DataSource){}


  async getCities() {
    // return this.dataSource.manager.find(City)
     return this.repo.find();
  }

  
}
