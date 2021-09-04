/**
 * Data Model Interfaces
 */

import User from "../models/user.model";
import { db } from "../index";
import { USERS_COLLECTION } from "../utils/firestore-collections.constants";
import Result from "../models/result.model";

/**
 * Service Methods
 */

/**
 * Creates a new user on firestore
 * @param user - The user jsonObject to be added
 */
export const createUser = async (user?: User): Promise<Result> => {
  try {
    if (user !== null && user) {
      const docRef = await db.collection(USERS_COLLECTION).add(user);
      return new Result(200, `Successfully added: ${user}`);
    }
  } catch (error) {
    console.log(error);
    return new Result(300, error);
  }
  return new Result(-1, "Something wrong happened!");
};
