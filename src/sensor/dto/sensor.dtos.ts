import { IsNotEmpty} from "class-validator";
import { Double } from "typeorm";
import { device } from "typeors";

export class CreatesensorDto {
  

  @IsNotEmpty()
  temperature: number;

  @IsNotEmpty()
  humi: number;

  @IsNotEmpty()
  device_id: device;
  
}