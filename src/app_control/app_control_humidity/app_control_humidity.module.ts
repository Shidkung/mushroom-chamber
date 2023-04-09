import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appcontrol_humidity} from 'typeors';
import { app_control_humidityService } from './service/app_control_humidity.service';
import { app_control_humidityController } from './controller/app_control_humidity.controller';
import { MqttsModule } from 'src/mqtt/mqtt/mqtt.module';
import { deviceModule } from 'src/device/devices/device.module';
@Module({
  imports:[TypeOrmModule.forFeature([appcontrol_humidity]),MqttsModule,deviceModule],
  controllers: [app_control_humidityController],
  providers: [app_control_humidityService  ]
})
export class app_control_humidityModule {}