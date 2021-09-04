import IResult from "./interfaces/result.interface";

export default class Result implements IResult {
  public code?: number;
  public message?: string;
  public payload?: any;

  constructor(code: number, message: string, payload: any) {
    this.code = code;
    this.message = message;
    this.payload = payload;
  }
}
