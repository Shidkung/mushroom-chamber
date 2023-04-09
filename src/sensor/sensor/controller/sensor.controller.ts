import {
    Body,
    Controller,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
import { CreatesensorDto } from 'src/sensor/dto/sensor.dtos';
import { sensorService } from '../service/sensor.service';
    
    @Controller('sensor')
    export class sensorController {
      constructor(private readonly sensorService: sensorService) {}
      
      @Post('update')
      @UsePipes(ValidationPipe)
      createdevice(@Body() createsensorDto:  CreatesensorDto) {
        return this. sensorService.updatesensor( createsensorDto)
      }
    }