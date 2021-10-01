import Book from "../models/book.model";
import { db } from "../index";
import { BOOKS_COLLECTION } from "../utils/firestore-collections.constants";
import { v4 as uuidv4 } from "uuid";
import Result from "../models/result.model";

/**
 * Adds a book the the `Books` collection in Firestore
 * @param book - the book to be added
 * @returns a `Result` where if successful, a docRef is returned.
 */
export const addBook = async (book: Book): Promise<Result> => {
  let response: Result;
  try {
    const uid = uuidv4();
    book.uid = uid;
    const docRef = await db.collection(BOOKS_COLLECTION).doc(uid).set(book);
    response = new Result(200, "Book successfully added!", docRef);
  } catch (error) {
    response = new Result(-1, `${error}`, null);
  }
  return response;
};

/**
 * Removes the specified book from the `Books` collection.
 * @param uid - the book's id
 */
export const removeBookById = async (uid: string): Promise<Result> => {
  let response: Result;
  try {
    if (uid != null) {
      const result = await db.collection(BOOKS_COLLECTION).doc(uid).delete();
      response = new Result(200, "book successfully deleted", result);
    } else {
      response = new Result(400, "no or incorrect uid provided", null);
    }
  } catch (error) {
    response = new Result(400, `${error}`, null);
  }
  return response;
};

/**
 * Deletes the entire `Books` collection from Firebase.
 * @returns A result of the query
 */
export const deleteAllBooks = async (): Promise<Result> => {
  let response: Result;
  try {
    const booksCollectionSnapshot = await db.collection(BOOKS_COLLECTION).get();
    if (booksCollectionSnapshot.size === 0) {
      return new Result(200, "No Books to be delted.", null);
    }
    const dbBatch = db.batch();
    booksCollectionSnapshot.forEach((doc) => dbBatch.delete(doc.ref));
    await dbBatch.commit();
    response = new Result(
      200,
      "All books have been successfully deleted.",
      null
    );
  } catch (error) {
    response = new Result(401, `${error}`, null);
  }
  return response;
};

/**
 * Updates the specified book within the firebase.
 * @param uid - ID of the book to be updated
 * @param book - The details of the book it needed to be updated with
 * @returns the result of the query.
 */
export const updateBook = async (uid: string, book: Book): Promise<Result> => {
  let response: Result;
  console.log(book);

  try {
    if (book.uid !== uid) {
      return new Result(400, "Document uid and Book uid do not match ", null);
    }
    await db.collection(BOOKS_COLLECTION).doc(uid).update(book);
    response = new Result(200, `Successfully updated book: ${uid}`, null);
  } catch (error) {
    response = new Result(400, `${error}`, null);
  }
  return response;
};

/**
 * Retrieves the specified book from the `Books` collection.
 * @param uid - the book's id
 */
export const fetchBookById = async (uid: string): Promise<Result> => {
  let response: Result;
  try {
    if (uid != null) {
      const result = await db.collection(BOOKS_COLLECTION).doc(uid).get();
      const book = result.data();
      response = new Result(200, "book successfully deleted", book);
    } else {
      response = new Result(400, "no or incorrect uid provided", null);
    }
  } catch (error) {
    return new Result(400, `${error}`, null);
  }
  return response;
};

/**
 * Fetch all books in the book collection.
 *
 * NOTE: Will become inefficient, don't use in favor of Algolia search.
 */
export const fetchAllBooks = async (): Promise<Result> => {
  let result: Result;
  const bookList: Book[] = [];
  try {
    const booksDocList = await db.collection(BOOKS_COLLECTION).listDocuments();
    booksDocList.forEach(async (bookSnapshot) => {
      const book = await bookSnapshot.get();
      bookList.push(book.data as Book);
    });
    result = new Result(200, "success", bookList);
  } catch (error) {
    result = new Result(400, "Error retrieiving books", null);
  }
  return result;
};
