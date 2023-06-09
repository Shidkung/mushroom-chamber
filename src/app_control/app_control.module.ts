import { Module } from '@nestjs/common';
import { app_control_humidityModule } from './app_control_humidity/app_control_humidity.module';
import { app_control_tempModule } from './app_control_temp/app_control_temp.module';
import { app_control_powerModule } from './app_control_power/app_control_power.module';
import { app_control_airModule } from './app_control_air/app_control_air.module';
import { app_control_lightModule } from './app_control_light/app_control_light.module';
@Module({
    imports:[ app_control_humidityModule, app_control_tempModule,app_control_powerModule,app_control_lightModule ,app_control_airModule],
    controllers:[],
    providers:[]
})
export class AppControlModule {
    
}
