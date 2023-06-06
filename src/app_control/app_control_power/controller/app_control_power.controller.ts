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
import { Createapp_control_powerDto } from '../dto/app_control_power.dtos';
import { app_control_powerService } from '../service/app_control_power.service';
import { device } from 'typeors';
    
    @Controller('app_control_power')
    export class app_control_powerController {
      constructor(private readonly  app_control_powerService :  app_control_powerService ) {}
      
      @Get('id/:id')
      find(@Param('id', ParseIntPipe) id:device) {
        return this. app_control_powerService .find(id);
      }
      
      @Post('update')
      @UsePipes(ValidationPipe)
      updateapp_humi(@Body()  Createapp_control_powerDto : Createapp_control_powerDto ) {
        return this. app_control_powerService .updateapp_power( Createapp_control_powerDto);
      }
    }