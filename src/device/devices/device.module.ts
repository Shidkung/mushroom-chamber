import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { device } from 'typeors';
import { deviceController } from './controllers/device.controllers';
import { deviceService } from './services/device.service';

@Module({
  imports: [TypeOrmModule.forFeature([device])],
  controllers: [deviceController],
  providers: [deviceService],
  exports:[deviceService]
})
export class deviceModule {}