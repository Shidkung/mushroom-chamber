import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUsers_loginDto {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}