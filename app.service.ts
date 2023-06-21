import { Injectable } from '@nestjs/common/decorators';
import { deviceService } from 'src/device/devices/services/device.service';
import { actuatorService } from 'src/actuator/actuator/service/actuator.service';
import { sensorService } from 'src/sensor/sensor/service/sensor.service';
import { initialService } from 'src/initial/initial/service/initial.service';
import { device } from 'typeors';

interface show {

  device_id: number;
  temperature: number;
  humidity: number;
  light: number;
  air:number;
  power:number;
  version: string;
}

@Injectable()
export class AppService {
  constructor(private readonly deviceservice: deviceService,private readonly initialservice:initialService,private readonly actuatorservice:actuatorService,private readonly sensorservice:sensorService) {}

  async show(device_id: device) {
      const id = Number(device_id);
    
      var find_id  = await this.deviceservice.findClientBydevice(id);
      if(find_id===null){
        return "not found" ;
      }
     // console.log(find_id)
      const sensorDevice = await this.sensorservice.find(device_id);
      //console.log(sensorDevice)
      const initialdevice = await this.initialservice.find(device_id);
     // console.log(initialdevice);

      const actuatordevice = await this.actuatorservice.finddeviceById(device_id);
    //  console.log(actuatordevice)
      const Shows : show = {
        device_id: find_id.device_id,
      temperature: sensorDevice.temperature,
      humidity: sensorDevice.humi,
      light: actuatordevice.light_status ,
      air:actuatordevice.air_status,
      power: actuatordevice.power_status,
      version: initialdevice.version
      };
     // console.log(Shows)
      const json = JSON.stringify(Shows);
      return json;
   }

   
}