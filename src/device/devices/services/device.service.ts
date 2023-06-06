import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { device } from 'typeors';
import { Repository } from 'typeorm';
import { CreatedeviceDto } from 'src/device/dto/device.dtos';

@Injectable()
export class deviceService {
  constructor(
    @InjectRepository(device) private readonly deviceRepository: Repository<device>,
  ) {}
  finddeviceByClientid(client_id:string){
    return this.deviceRepository.findOne({where:{client_id:client_id}})
  }  
  async createdevice(createdeviceDto: CreatedeviceDto) {
    const check = await this.finddeviceByClientid(createdeviceDto.client_id)
    if(check){
    const newdevice = this.deviceRepository.create(createdeviceDto);
    return this.deviceRepository.save(newdevice);
    }
    else{
      return "device already used"
    }
  }
   
 async findClientBydevice(id: number) {
    const Client = await this.deviceRepository.findOne({where:{device_id:id}});
    return Client
  }

 async finddeviceById_forclient(id: string) {
    const Client = await this.deviceRepository.findOne({where:{client_id:id}});
    return  Client.device_id
  }
  
  getDevice(){
    return this.deviceRepository.find()
  }
}