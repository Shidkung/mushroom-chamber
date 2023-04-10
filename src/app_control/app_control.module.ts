import { Module } from '@nestjs/common';
import { app_control_humidityModule } from './app_control_humidity/app_control_humidity.module';
import { app_control_tempModule } from './app_control_temp/app_control_temp.module';
@Module({
    imports:[ app_control_humidityModule, app_control_tempModule ],
    controllers:[],
    providers:[]
})
export class AppControlModule {
    
}
