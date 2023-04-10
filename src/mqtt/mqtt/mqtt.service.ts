import { Injectable, OnModuleInit } from "@nestjs/common"
import * as mqtt from "mqtt"
import { error, info } from "ps-logger";
import * as fs from 'fs';
import { actuatorService } from "src/actuator/actuator/service/actuator.service";
 import { deviceService } from "src/device/devices/services/device.service";
import { sensorService } from "src/sensor/sensor/service/sensor.service";
import { initialService } from "src/initial/initial/service/initial.service";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class MqttsService implements OnModuleInit {
  constructor(private readonly deviceService: deviceService,private readonly actuatorService: actuatorService,
    private readonly  sensorService :  sensorService ,private readonly  initialService : initialService,private readonly configService: ConfigService) {}
  private mqttClient;

  onModuleInit() {
    const host = this.configService.get<string>('host')
    const port = this.configService.get<string>('port')
    const cafile =this.configService.get<string>('cafile')
    const cert = this.configService.get<string>('cert')
    const key =this.configService.get<string>('key')
    const clientId = 'MS_Server';
    const topic = this.configService.get<string>('topic');
    const connectUrl = `mqtt://${host}:${port}`;

    this.mqttClient = mqtt.connect(connectUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
      username: '',
      password: '',
      reconnectPeriod: 1000,
       ca:fs.readFileSync(cafile),
       cert:fs.readFileSync(cert),
        key:fs.readFileSync(key)
    });

    this.mqttClient.on("connect", function () {
      info("Connected to CloudMQTT");
    });

    
    this.mqttClient.on("error", function () {
      error("Error in connecting to CloudMQTT");
    });
   this.subscribe(topic)
}
publish(topic: string, payload: string){
    info(`Publishing to ${topic}`);
    this.mqttClient.publish(topic, payload);
    return `Publishing to ${topic}`;
  }



private subscribe(topic:string){
    this.mqttClient.subscribe(topic)
    this.mqttClient.on('message',async (topic,message) => {
      const messages = message.toString() 
      const messagesJS = JSON.parse(messages)
      const sep = topic.split("/")
      const Client_id = sep[2] 
      const path_send  = sep[4]
      const device_id = await this.deviceService.finddeviceByClientid(Client_id)
      messagesJS.device_id = device_id.device_id
      messagesJS.device_id = parseInt(messagesJS.device_id)
      switch(path_send){
        case "status":
          await this.actuatorService.sendAct(messagesJS)
          console.log(messagesJS)
          break;
        case "value":
          await this.sensorService.updatesensor(messagesJS)
          break;
        case "initial":
          await this.initialService.updateInitial(messagesJS)
          break
      }
      
    });
    }; 

  }




