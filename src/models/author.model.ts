import { IsAlpha, IsNotEmpty, IsString } from "class-validator";
import IAuthor from "./interfaces/author.interface";

/**
 * Author schema
 */
export default class Author implements IAuthor {
  @IsString()
  @IsNotEmpty()
  public uid?: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  public firstName?: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  public lastName?: string;
}
