import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { appcontrol_humidity, device} from 'typeors';
import { Repository } from 'typeorm';
import { Createapp_control_humidityDto } from 'src/app_control/dto/app_control_humidity.dtos';

@Injectable()
export class app_control_humidityService {
  constructor(
    @InjectRepository(appcontrol_humidity) private readonly app_control_humidityRepository: Repository<appcontrol_humidity>,
  ) {}
  find(device_id:device){
    return this.app_control_humidityRepository.findOne({where:{device_id:device_id}})
  }  
  updateapp_humi(Createapp_control_humidityDto : Createapp_control_humidityDto ) {
    const newcontrolhumi = this.app_control_humidityRepository.create(Createapp_control_humidityDto);
    return this.app_control_humidityRepository.save(newcontrolhumi);
    
  }
}