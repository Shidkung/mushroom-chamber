import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
import { Createapp_control_humidityDto } from 'src/app_control/dto/app_control_humidity.dtos';
import { app_control_humidityService } from '../service/app_control_humidity.service';
import { device } from 'typeors';
    
    @Controller('app_control_humi')
    export class app_control_humidityController {
      constructor(private readonly  app_control_humidityService :  app_control_humidityService ) {}
      
      @Get('id/:id')
      find(@Param('id', ParseIntPipe) id:device) {
        return this. app_control_humidityService .find(id);
      }
      
      @Post('update')
      @UsePipes(ValidationPipe)
      updateapp_humi(@Body()  Createapp_control_humidityDto : Createapp_control_humidityDto ) {
        return this. app_control_humidityService .updateapp_humi( Createapp_control_humidityDto);
      }
    }