import { IsNotEmpty,isNumber } from "class-validator";
import { device } from "typeors";

export class CreatedactuatorDto {
    @IsNotEmpty()
    light_status: number

    @IsNotEmpty()
    air_status: number

    @IsNotEmpty()
    power_status: number

    @IsNotEmpty()
    humitemp_status: number

    @IsNotEmpty()
    device_id: device

}