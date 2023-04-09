import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'typeors';
@Module({
  imports:[TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
