import {
  IsAlphanumeric,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import { Timestamp } from "@google-cloud/firestore";
import IFine from "./interfaces/fine.interface";

export default class Fine implements IFine {
  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  public finaId?: string;

  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  public bookInstanceId?: string;

  @IsNumber()
  @IsNotEmpty()
  public amountId?: number;

  @IsNotEmpty()
  public dateObtained?: Timestamp;
}
