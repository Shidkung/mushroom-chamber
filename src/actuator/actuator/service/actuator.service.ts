import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatedactuatorDto } from 'src/actuator/dto/actuator.dtos';
import { Actuator } from 'typeors/actuator.entity';
import { device } from 'typeors';
@Injectable()
export class actuatorService {
  constructor(
    @InjectRepository(Actuator) private readonly actuatorRepository: Repository<Actuator>,
  ) {}

  
 async sendAct(CreatedactuatorDto: CreatedactuatorDto) {
    const newact = this. actuatorRepository.create(CreatedactuatorDto);
    return this.actuatorRepository.save(newact);
  }
 async finddeviceById(id: device) {
   return  await this. actuatorRepository.findOne({where:{device_id:id}});
  }
  getAct(){
    return this. actuatorRepository.find()
  }
}