import { Users } from "./users.entity";
import { device } from "./device.entity";
import { Actuator } from "./actuator.entity";
import { sensor } from "./sensor.entity";
import { initial } from "./initial.entity";
import { appcontrol_humidity } from "./app_control_humidity.entity";
import { appcontrol_temp } from "./app_control_temp.entity";
import { login } from "./login.entity";
const entities = [Users,device,Actuator,sensor,initial,appcontrol_humidity,appcontrol_temp,login];

export {Users,device,Actuator,sensor,initial,appcontrol_humidity,appcontrol_temp,login};
export default entities;