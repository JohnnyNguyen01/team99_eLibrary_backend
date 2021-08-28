import { IsNotEmpty, IsString } from "class-validator";
import IBookInstance from "./interfaces/book-instance.interface";

export default class BookInstance implements IBookInstance {
  @IsString()
  @IsNotEmpty()
  public bookId?: string;

  @IsString()
  @IsNotEmpty()
  public bookInstanceId?: string;

  @IsString()
  @IsNotEmpty()
  public borrowerId?: string;

  @IsNotEmpty()
  public borrowedAt?: FirebaseFirestore.Timestamp;

  @IsNotEmpty()
  public dueBy?: FirebaseFirestore.Timestamp;
}
