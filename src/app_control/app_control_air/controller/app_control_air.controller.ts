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
import { Createapp_control_airDto } from '../dto/app_control_air.dtos';
import { app_control_airService } from '../service/app_control_air.service';
import { device } from 'typeors';
    
    @Controller('app_control_air')
    export class app_control_airController {
      constructor(private readonly  app_control_airService :   app_control_airService ) {}
      
      @Get('id/:id')
      find(@Param('id', ParseIntPipe) id:device) {
        return this. app_control_airService .find(id);
      }
      
      @Post('update')
      @UsePipes(ValidationPipe)
      updateapp_air(@Body() Createapp_control_airDto  : Createapp_control_airDto  ) {
        return this. app_control_airService.updateapp_air( Createapp_control_airDto );
      }
    }