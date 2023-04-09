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
    import { CreateUsersDto } from 'src/users/dto/Users.dtos';
    import { UsersService } from 'src/users//users/service/users/users.service';
    import * as bcrypt from 'bcrypt';
    @Controller('users')
    export class UsersController {
      constructor(private readonly userService: UsersService) {}
      
      @Get()
      getUsers() {
        return this.userService.getUsers();
      }
      
      @Get('id/:id')
      findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
      }
      

      @Post('create')
      @UsePipes(ValidationPipe)
        async createUsers(@Body() createUserDto: CreateUsersDto) {
        const saltOrRounds = 10;
        const hashpass =  await bcrypt.hash(createUserDto.password,saltOrRounds)
        createUserDto.password = hashpass
        return this.userService.createUser(createUserDto);
      }
    }