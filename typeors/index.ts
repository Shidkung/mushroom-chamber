import { Users } from "./users.entity";
import { device } from "./device.entity";
import { Actuator } from "./actuator.entity";
import { sensor } from "./sensor.entity";
import { initial } from "./initial.entity";
import { appcontrol_humidity } from "./app_control_humidity.entity";
import { appcontrol_temp } from "./app_control_temp.entity";
import { login } from "./login.entity";
import { appcontrol_power } from "./app_control_power.entity";
import { appcontrol_air } from "./app_control_air.entity";
import { appcontrol_light } from "./app_control_light.entity";
const entities = [Users,device,Actuator,sensor,initial,appcontrol_humidity,appcontrol_temp,login,appcontrol_power
,appcontrol_air, appcontrol_light ];

export {Users,device,Actuator,sensor,initial,appcontrol_humidity,appcontrol_temp,login,appcontrol_power
,appcontrol_air, appcontrol_light };
export default entities;