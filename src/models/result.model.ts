import IResult from "./interfaces/result.interface";

export default class Result implements IResult {
  public code?: number;
  public message?: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }
}
