import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'typeors';
import { Repository } from 'typeorm';
import { CreateUsersDto } from 'src/users/dto/users.dtos';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}
      
 async findUserByemail(email : string){
    
    const check = await this.userRepository.findOne({where:{email:email}})
    console.log(check)
    if(check === null){
      return undefined
    }
    else{
      return check
    }
  }
  async findUserByUsername(username : string){

    return await this.userRepository.findOne({where:{username:username}})
  }
 async register(createUserDto: CreateUsersDto) {
    const check = await this.findUserByemail(createUserDto.email);
    console.log(check)
   
     if(check !== undefined){
       return "Have this account"
     }
     else{
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