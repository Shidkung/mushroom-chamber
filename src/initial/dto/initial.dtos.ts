import { IsNotEmpty} from "class-validator";
import { device } from "typeors";

export class CreateinitialDto {
  

  @IsNotEmpty()
  version: string;

  @IsNotEmpty()
  device_id:device

}