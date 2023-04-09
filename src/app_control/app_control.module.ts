import { Module } from '@nestjs/common';
import { app_control_humidityModule } from './app_control_humidity/app_control_humidity.module';
@Module({
    imports:[ app_control_humidityModule ],
    controllers:[],
    providers:[]
})
export class AppControlModule {
    
}
