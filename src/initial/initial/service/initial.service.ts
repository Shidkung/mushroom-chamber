import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { device, initial } from 'typeors';
import { Repository } from 'typeorm';
import { CreateinitialDto } from 'src/initial/dto/initial.dtos';

@Injectable()
export class initialService {
  constructor(
    @InjectRepository(initial) private readonly initialRepository: Repository<initial>,
  ) {}
 async find(device_id:device){
    return await this.initialRepository.findOne({where:{device_id:device_id},order:{id:'DESC'}})
  }  
  updateInitial(CreateinitialDto : CreateinitialDto ) {
    const newinitial = this.initialRepository.create(CreateinitialDto);
    return this.initialRepository.save(newinitial);
    
  }
}