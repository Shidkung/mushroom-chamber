import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { appcontrol_light, device} from 'typeors';
import { Repository } from 'typeorm';
import { Createapp_control_lightDto } from '../dtos/app_control_light.dtos';
import { MqttsService } from 'src/mqtt/mqtt/mqtt.service';
import { deviceService } from 'src/device/devices/services/device.service';
@Injectable()
export class app_control_lightService {
  constructor(
    @InjectRepository(appcontrol_light) private readonly app_control_lightRepository: Repository<appcontrol_light>,
  private readonly MqttsService:MqttsService,private readonly deviceService:deviceService) {}
  find(device_id:device){
    return this.app_control_lightRepository.findOne({where:{device_id:device_id}})
  }  
  async updateapp_light(Createapp_control_lightDto : Createapp_control_lightDto) {
    const device_id = Createapp_control_lightDto.device_id
    const device_id_Str = JSON.stringify(device_id)
    const device_id_Int = parseInt(device_id_Str)
    const newcontrolhumi = this.app_control_lightRepository.create(Createapp_control_lightDto);
    const client = await this.deviceService.findClientBydevice(device_id_Int)
    const client_id =client.client_id
    let MqttData_STR = JSON.stringify(Createapp_control_lightDto) 
    const MqttData_OB =JSON.parse(MqttData_STR)
    const Topic ="mc/v1/"+client_id+"/control/light"
    delete MqttData_OB.device_id
     MqttData_STR =JSON.stringify(MqttData_OB)
    this.MqttsService.publish(Topic,MqttData_STR)
    return this.app_control_lightRepository.save(newcontrolhumi);
    
  }
}