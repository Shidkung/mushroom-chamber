import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
  } from '@nestjs/common';
import { AppService } from './app.service';
import { device } from 'typeors';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('id/:device_id')
  show(@Param('device_id', ParseIntPipe) device_id:device){
    return this.appService.show(device_id);
  }

}