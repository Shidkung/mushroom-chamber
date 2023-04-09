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
import { CreateinitialDto } from 'src/initial/dto/initial.dtos';
import { initialService } from '../service/initial.service';
import { device } from 'typeors';
    
    @Controller('initial')
    export class InitialController {
      constructor(private readonly initialService: initialService) {}
      
      @Get('id/:id')
      find(@Param('id', ParseIntPipe) id:device) {
        return this.initialService.find(id);
      }
      
      @Post('update')
      @UsePipes(ValidationPipe)
      updateInitial(@Body()  CreateinitialDto :  CreateinitialDto ) {
        return this.initialService.updateInitial( CreateinitialDto );
      }
    }