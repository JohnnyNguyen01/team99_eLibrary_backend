import IResult from "./interfaces/result.interface";

export default class Result implements IResult {
  public code?: number;
  public message?: string;
  public payload?: unknown;

  /**
   * Creates a Resuly object
   * @param code - status code
   * @param message - message to be displayed
   * @param payload  - result payload
   */
  constructor(code: number, message: string, payload: unknown) {
    this.code = code;
    this.message = message;
    this.payload = payload;
  }
}
