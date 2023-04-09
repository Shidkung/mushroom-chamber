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
import { CreatedeviceDto } from 'src/device/dto/device.dtos';
import { deviceService } from '../services/device.service';
    
    @Controller('device')
    export class deviceController {
      constructor(private readonly deviceService: deviceService) {}
      
      @Get()
      getdevice() {
        return this.deviceService.getDevice();
      }
      
      @Get('id/:id')
      finddeviceById(@Param('id', ParseIntPipe) id: number) {
        return this.deviceService.findClientBydevice(id);
      }
  
      @Post('create')
      @UsePipes(ValidationPipe)
      createdevice(@Body() createdeviceDto: CreatedeviceDto) {
        return this.deviceService.createdevice(createdeviceDto);
      }
    }