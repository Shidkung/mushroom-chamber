import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {appcontrol_power} from 'typeors';
import { app_control_powerService } from './service/app_control_power.service';
import { app_control_powerController } from './controller/app_control_power.controller';
import { MqttsModule } from 'src/mqtt/mqtt/mqtt.module';
import { deviceModule } from 'src/device/devices/device.module';
@Module({
  imports:[TypeOrmModule.forFeature([appcontrol_power]),MqttsModule,deviceModule],
  controllers: [app_control_powerController],
  providers: [app_control_powerService  ]
})
export class app_control_powerModule {}