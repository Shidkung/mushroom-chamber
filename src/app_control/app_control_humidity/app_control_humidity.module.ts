import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appcontrol_humidity} from 'typeors';
import { app_control_humidityService } from './service/app_control_humidity.service';
import { app_control_humidityController } from './controller/app_control_humidity.controller';

@Module({
  imports:[TypeOrmModule.forFeature([appcontrol_humidity])],
  controllers: [app_control_humidityController],
  providers: [app_control_humidityService  ]
})
export class app_control_humidityModule {}