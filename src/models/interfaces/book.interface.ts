/**
 * The Book Interface
 */
export default interface IBook {
  /**
   * uid of the book
   */
  uid?: string;
  /**
   * The Book's name
   */
  name?: string;
  /**
   * The authorId
   */
  authorId?: string;

  /**
   * The categories of the book
   */
  categories?: string[];

  /**
   * uri to the book's cover page
   */
  imageUrl?: string;
}
