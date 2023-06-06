import { IsNotEmpty} from "class-validator";
import { device } from "typeors";

export class Createapp_control_airDto {
   

    @IsNotEmpty()
    gap: number

    @IsNotEmpty()
    duration: number

    @IsNotEmpty()
    device_id: device

}