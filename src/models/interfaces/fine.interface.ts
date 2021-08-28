import { Timestamp } from "@google-cloud/firestore";

export default interface IFine {
  /**
   * Fine's uid
   */
  finaId?: string;

  /**
   * Id of the related BookInstance
   */
  bookInstanceId?: string;

  /**
   * Fine amount in cents
   */
  amountId?: number;

  /**
   * Timestamp of the moment the fine was obtained
   */
  dateObtained?: Timestamp;
}
