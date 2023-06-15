import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appcontrol_light } from 'typeors';
import { app_control_lightService } from './service/app_control_light.service';
import { MqttsModule } from 'src/mqtt/mqtt/mqtt.module';
import { deviceModule } from 'src/device/devices/device.module';
import { app_control_lightController } from './controller/app_control_light.controller';
@Module({
  imports:[TypeOrmModule.forFeature([appcontrol_light]),MqttsModule,deviceModule],
  controllers: [app_control_lightController  ],
  providers: [ app_control_lightService ]
})
export class app_control_lightModule {}