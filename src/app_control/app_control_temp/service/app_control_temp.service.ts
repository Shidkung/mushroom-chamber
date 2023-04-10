import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Createapp_control_tempDto } from '../dto/app_control_temp.dtos';
import { device ,appcontrol_temp} from 'typeors';
import { Repository } from 'typeorm';
import { MqttsService } from 'src/mqtt/mqtt/mqtt.service';
import { deviceService } from 'src/device/devices/services/device.service';
@Injectable()
export class app_control_tempService {
  constructor(
    @InjectRepository(appcontrol_temp) private readonly app_control_tempRepository: Repository<appcontrol_temp>,
  private readonly MqttsService:MqttsService,private readonly deviceService:deviceService) {}
  find(device_id:device){
    return this.app_control_tempRepository.findOne({where:{device_id:device_id}})
  }  
  async updateapp_temp( Createapp_control_tempDto :  Createapp_control_tempDto) {
    const device_id = Createapp_control_tempDto.device_id
    const device_id_Str = JSON.stringify(device_id)
    const device_id_Int = parseInt(device_id_Str)
    const newcontroltemp = this.app_control_tempRepository.create( Createapp_control_tempDto);
    const client = await this.deviceService.findClientBydevice(device_id_Int)
    const client_id =client.client_id
    let MqttData_STR = JSON.stringify( Createapp_control_tempDto) 
    const MqttData_OB =JSON.parse(MqttData_STR)
    const Topic ="mc/v1/"+client_id+"/control/temp"
    delete MqttData_OB.device_id
     MqttData_STR =JSON.stringify(MqttData_OB)
    this.MqttsService.publish(Topic,MqttData_STR)
    return this.app_control_tempRepository.save(newcontroltemp);
    
  }
}