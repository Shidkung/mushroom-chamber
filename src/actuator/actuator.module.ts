import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { actutorController } from './actuator/controllers/actuator.controller';
import { actuatorService } from './actuator/service/actuator.service';
import { Actuator } from 'typeors/actuator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actuator])],
  controllers: [actutorController],
providers: [actuatorService],
exports:[actuatorService]
})
export class actuatorModule {}