import { IsNotEmpty, IsString } from "class-validator";

import IAuthEmailPassword from "./interfaces/auth.interface";

export default class AuthEmailPassword implements IAuthEmailPassword {
  @IsString()
  @IsNotEmpty()
  public email?: string;

  @IsString()
  @IsNotEmpty()
  public password?: string;
}
