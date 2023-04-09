import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { initial } from 'typeors';
import { initialService } from './service/initial.service';
import { InitialController } from './controller/initial.controller';
@Module({
  imports:[TypeOrmModule.forFeature([initial])],
  controllers: [InitialController],
  providers: [initialService ],
  exports:[initialService]
})
export class initialrModule {}