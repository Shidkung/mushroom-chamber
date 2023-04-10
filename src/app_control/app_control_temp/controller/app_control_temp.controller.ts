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
import { Createapp_control_tempDto } from '../dto/app_control_temp.dtos';
import { app_control_tempService } from '../service/app_control_temp.service';
import { device } from 'typeors';
    
    @Controller('app_control_temp')
    export class app_control_tempController {
      constructor(private readonly   app_control_tempService  : app_control_tempService  ) {}
      
      @Get('id/:id')
      find(@Param('id', ParseIntPipe) id:device) {
        return this.  app_control_tempService  .find(id);
      }
      
      @Post('update')
      @UsePipes(ValidationPipe)
      updateapp_temp(@Body()   Createapp_control_tempDto :  Createapp_control_tempDto ) {
        return this.  app_control_tempService  .updateapp_temp( Createapp_control_tempDto);
      }
    }