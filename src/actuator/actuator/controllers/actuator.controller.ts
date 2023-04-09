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
import { CreatedactuatorDto } from 'src/actuator/dto/actuator.dtos';
import { actuatorService } from '../service/actuator.service';
    @Controller('actuator')
    export class actutorController {
      constructor(private readonly actuatorService: actuatorService) {}
      @Get()
      getdevice() {
        return this.actuatorService.getAct();
      }
      
      @Post('update')
      @UsePipes(ValidationPipe)
      createact(@Body() CreatedactuatorDto: CreatedactuatorDto) {
        console.log(typeof CreatedactuatorDto)
        const datas =JSON.stringify(CreatedactuatorDto )
        console.log(typeof datas)
        return this.actuatorService.sendAct(CreatedactuatorDto);
      }
      
      
    }