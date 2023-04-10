import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users/service/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { login } from 'typeors';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
  constructor(@InjectRepository(login) private readonly loginRepository: Repository<login>,private usersService: UsersService,private jwtService: JwtService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByemail(email);
    const CreateloginDto = {
      email:email
    }
    const newlogin = this.loginRepository.create(CreateloginDto);
    this.loginRepository.save(newlogin)
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.user_id};


    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
