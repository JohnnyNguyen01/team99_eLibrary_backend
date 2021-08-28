import { IsNotEmpty, IsString } from "class-validator";
import ICategory from "./interfaces/category.interface";

export default class Category implements ICategory {
  @IsString()
  @IsNotEmpty()
  public uid?: string;

  @IsString()
  @IsNotEmpty()
  public name?: string;
}
