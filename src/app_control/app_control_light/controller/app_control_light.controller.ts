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
import { Createapp_control_lightDto } from '../dtos/app_control_light.dtos';
import { app_control_lightService } from '../service/app_control_light.service';
import { device } from 'typeors';
    
    @Controller('app_control_light')
    export class app_control_lightController {
      constructor(private readonly  app_control_lightService :  app_control_lightService ) {}
      
      @Get('id/:id')
      find(@Param('id', ParseIntPipe) id:device) {
        return this. app_control_lightService .find(id);
      }
      
      @Post('update')
      @UsePipes(ValidationPipe)
      updateapp_light(@Body()  Createapp_control_lightDto  : Createapp_control_lightDto  ) {
        return this. app_control_lightService .updateapp_light( Createapp_control_lightDto );
      }
    }