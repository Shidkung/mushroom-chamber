import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sensor } from 'typeors';
import { Repository } from 'typeorm';
import { CreatesensorDto } from 'src/sensor/dto/sensor.dtos';
@Injectable()
export class sensorService {
  constructor(
    @InjectRepository(sensor) private readonly sensorRepository: Repository<sensor>,
  ) {}
      
  updatesensor(CreatesensorDto : CreatesensorDto ) {
    const newser = this.sensorRepository.create(CreatesensorDto);
    return this.sensorRepository.save(newser);
  }
}