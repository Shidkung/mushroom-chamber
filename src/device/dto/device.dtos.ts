import { IsNotEmpty} from "class-validator";
import { Users } from "typeors";

export class CreatedeviceDto {
  

  @IsNotEmpty()
  client_id: string;

  @IsNotEmpty()
  user_id:Users

}