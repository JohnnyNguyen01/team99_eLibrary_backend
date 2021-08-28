import { Timestamp } from "@google-cloud/firestore";

/**
 * Book Instance interface
 */
export default interface IBookInstance {
  /**
   * The bookId
   */
  bookId?: string;
  /**
   * The book Instance Id
   */
  bookInstanceId?: string;
  /**
   * The uid of the borrower (user)
   */
  borrowerId?: string;
  /**
   * Timestamp of when the item was borrowed
   */
  borrowedAt?: Timestamp;
  /**
   * Timestamp of when the item is due
   */
  dueBy?: Timestamp;
}
