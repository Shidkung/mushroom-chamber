import { IsNotEmpty} from "class-validator";
import { device } from "typeors";

export class CreatesensorDto {
  

  @IsNotEmpty()
  temp: number;

  @IsNotEmpty()
  humidity: number;

  @IsNotEmpty()
  device_id: device;
  
}