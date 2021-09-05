import express, { Request, Response } from "express";
import * as BookService from "../services/books.service";
import Book from "../models/book.model";
import Result from "../models/result.model";

// books router
export const booksRouter = express.Router();

/**
 * Route to add a book to the database
 */
export const addBook = booksRouter.post(
  "/add-book",
  async (req: Request, res: Response) => {
    const book: Book = req.body;
    console.log(req.body);
    try {
      const result = await BookService.addBook(book);
      // TODO: Add guards here after testing [Johnny]
      res.status(201);
      return res.send(result.message);
    } catch (error) {
      console.log(error);
      return res.send("Error adding book to database");
    }
  }
);

/**
 * Route to retrieve a book by its ID
 */
export const getByUid = booksRouter.get(
  "/getBookByUID/:uid",
  async (req: Request, res: Response) => {
    const params = req.params;
    try {
      const result = await BookService.fetchBookById(params.uid);
      // TODO: Add guards here after testing [Johnny]
      res.status(201);
      return res.send(result.message);
    } catch (error) {
      return res.send(error);
    }
  }
);

/**
 * Route to remove the requested book from the database via its uid.
 */
export const removeByUID = booksRouter.delete(
  "/deleteBookByUID/:uid",
  async (req: Request, res: Response) => {
    const params = req.params;
    try {
      const uid = params.uid;
      const result = await BookService.removeBookById(uid);
      res.status(201).json(res);
      res.send(result.message);
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  }
);

/**
 * Route to delete the `Books` collection from firebase
 */
export const deleteAllBooks = booksRouter.delete(
  "/deleteAllBooks",
  async (req: Request, res: Response) => {
    try {
      const result = await BookService.deleteAllBooks();
      if (result == null) {
        res.status(400);
        return res.send("Error null-result, something went wrong");
      }
      res.status(200);
      return res.send(result.message);
    } catch (error) {
      return res.send(error);
    }
  }
);

/**
 * Route to update a book within firestore
 */
export const updateBook = booksRouter.put(
  "/updateBook/:uid",
  async (req: Request, res: Response) => {
    const uid: string = req.params.uid;
    const book: Book = req.body;

    // TODO: Add guards after testing complete [Johnny]
    try {
      const result = await BookService.updateBook(uid, book);
      if (result === null) {
        res.status(400);
        return res.send("Error null-result, something went wrong");
      } else {
        res.status(201);
        return res.send(result?.message);
      }
    } catch (error) {
      return res.send(error);
    }
  }
);
