import { IsNotEmpty} from "class-validator";
import { device } from "typeors";

export class Createapp_control_humidityDto {
   

    @IsNotEmpty()
    humidity: number

    @IsNotEmpty()
    device_id: device

}