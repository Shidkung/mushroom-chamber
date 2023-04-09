import { Module } from '@nestjs/common';
import { MqttsService } from './mqtt.service';
import { deviceModule } from 'src/device/devices/device.module';
import { actuatorModule } from 'src/actuator/actuator.module';
import { sensorModule } from 'src/sensor/sensor/sensor.module';
import { initialrModule } from 'src/initial/initial/initial.module';
@Module({
  imports:[deviceModule,actuatorModule,sensorModule, initialrModule],
  providers: [MqttsService],
  exports:[MqttsService]
})
export class MqttsModule {}
