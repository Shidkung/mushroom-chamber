import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'typeors';
import { Repository } from 'typeorm';
import { CreateUsersDto } from 'src/users/dto/users.dtos';
import { info } from 'console';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}
      
 async findUserByUsername(username : string){

    return await this.userRepository.findOne({where:{username:username}})
  }
 async createUser(createUserDto: CreateUsersDto) {
    const check = await this.findUserByUsername(createUserDto.username);
    if(check){
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser)
    }
  }
      
  findUsersById(id: number) {
    return this.userRepository.findOne({where:{user_id:id}});
  }

  getUsers(){
    return this.userRepository.find()
  }
}