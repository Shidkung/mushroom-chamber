import { IsNotEmpty,isNumber } from "class-validator";
import { device } from "typeors";

export class CreatedactuatorDto {
    @IsNotEmpty()
    light_status: number

    @IsNotEmpty()
    air_status: boolean

    @IsNotEmpty()
    power_status: boolean

    @IsNotEmpty()
    humitemp_status: boolean

    @IsNotEmpty()
    device_id: device

}