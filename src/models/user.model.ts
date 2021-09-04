import { Timestamp } from "@google-cloud/firestore";
import IUser from "./interfaces/user.interface";
import {
  IsAlpha,
  IsAlphanumeric,
  IsBoolean,
  IsNotEmpty,
  IsString,
} from "class-validator";

/**
 * User Schema
 */
export default class User implements IUser {
  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  public email?: string;

  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  public firstName?: string;

  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  public lastName?: string;

  @IsBoolean()
  @IsNotEmpty()
  isAdmin?: boolean;
}
