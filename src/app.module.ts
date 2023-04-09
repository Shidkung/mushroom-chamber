import { Module } from '@nestjs/common';
import { deviceModule } from './device/devices/device.module';
import { UsersModule } from './users/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import entities from 'typeors';
import { AppService } from 'app.service';
import { actuatorModule } from './actuator/actuator.module';
import { MqttsModule } from './mqtt/mqtt/mqtt.module';
import { sensorModule } from './sensor/sensor/sensor.module';
import { initialrModule } from './initial/initial/initial.module';
import { AppControlModule } from './app_control/app_control.module';
import { AppController } from 'app.controller';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: + configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    deviceModule,
    AppControlModule,
    MqttsModule
   ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}