import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sensor } from 'typeors';
import { sensorService } from './service/sensor.service';
import { sensorController } from './controller/sensor.controller';
@Module({
  imports:[TypeOrmModule.forFeature([sensor])],
  controllers: [ sensorController],
  providers: [sensorService],
  exports:[sensorService]
})
export class sensorModule {}