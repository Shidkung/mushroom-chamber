import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appcontrol_air} from 'typeors';
import { app_control_airService } from './service/app_control_air.service';
import { app_control_airController } from './controller/app_control_air.controller';
import { MqttsModule } from 'src/mqtt/mqtt/mqtt.module';
import { deviceModule } from 'src/device/devices/device.module';
@Module({
  imports:[TypeOrmModule.forFeature([appcontrol_air]),MqttsModule,deviceModule],
  controllers: [app_control_airController ],
  providers: [app_control_airService  ]
})
export class app_control_airModule {}