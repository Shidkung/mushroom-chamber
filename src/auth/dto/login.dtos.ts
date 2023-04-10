import { IsEmail} from "class-validator";

export class CreateloginDto {

  @IsEmail()
  email: string;

}