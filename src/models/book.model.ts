import {
  IsAlpha,
  IsAlphanumeric,
  IsArray,
  IsNotEmpty,
  IsString,
} from "class-validator";
import IBook from "./interfaces/book.interface";

export default class Book implements IBook {
  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  public uid?: string;

  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  public name?: string;

  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  authorId?: string;

  @IsArray()
  @IsNotEmpty()
  categories?: string[];

  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  imageUrl?: string;
}
