import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { device, sensor } from 'typeors';
import { Repository } from 'typeorm';
import { CreatesensorDto } from 'src/sensor/dto/sensor.dtos';
@Injectable()
export class sensorService {
  constructor(
    @InjectRepository(sensor) private readonly sensorRepository: Repository<sensor>,
  ) {}
     async find(id : device){
      const find = await this.sensorRepository.findOne({where:{device_id:id},order:{id:'DESC'}});
          return find

      }
  updatesensor(CreatesensorDto : CreatesensorDto ) {
    const newser = this.sensorRepository.create(CreatesensorDto);
    console.log(newser)
    return this.sensorRepository.save(newser);
  }
}