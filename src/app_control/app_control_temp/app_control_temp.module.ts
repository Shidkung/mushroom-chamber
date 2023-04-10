import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appcontrol_temp } from 'typeors';
import { app_control_tempService } from './service/app_control_temp.service';
import { MqttsModule } from 'src/mqtt/mqtt/mqtt.module';
import { deviceModule } from 'src/device/devices/device.module';
import { app_control_tempController } from './controller/app_control_temp.controller';
@Module({
  imports:[TypeOrmModule.forFeature([appcontrol_temp]),MqttsModule,deviceModule],
  controllers: [app_control_tempController ],
  providers: [ app_control_tempService ]
})
export class app_control_tempModule {}