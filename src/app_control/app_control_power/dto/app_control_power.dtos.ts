import { IsNotEmpty} from "class-validator";
import { device } from "typeors";

export class Createapp_control_powerDto {
   

    @IsNotEmpty()
    value: number

    @IsNotEmpty()
    device_id: device

}