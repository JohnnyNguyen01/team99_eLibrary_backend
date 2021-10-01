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
      return new Result(200, `Successfully added: ${user}`, docRef);
    }
  } catch (error) {
    console.log(error);
    return new Result(300, error, null);
  }
  return new Result(-1, "Something wrong happened!", null);
};

/**
 * Retrieves a user via their uid
 * @param uid - the User's unique ID
 * @returns A `Result` Object with the `User` as the payload
 */
export const getUserByUID = async (uid?: string): Promise<Result> => {
  try {
    if (uid != null) {
      const userDoc = await db.collection(USERS_COLLECTION).doc(uid).get();
      const user = userDoc.data();
      if (user != null) {
        return new Result(200, "User retrieved", user);
      } else {
        return new Result(-1, "No user found with that uid", null);
      }
    } else {
      return new Result(-1, "Uid was null or incorrectly formatted", null);
    }
  } catch (error) {}
  return new Result(-1, "Something wrong happened!", null);
};

/**
 * deletes a user via their uid
 * @param uid - the User's unique ID
 */
export const deleteUserByUID = async (uid?: string): Promise<Result> => {
  try {
    if (uid != null) {
      const result = await db.collection(USERS_COLLECTION).doc(uid).delete();
      return new Result(200, "User deleted", result);
    } else {
      return new Result(-1, "Uid was null or incorrectly formatted", null);
    }
  } catch (e) {
    console.log(e)
    return new Result(-1, "Something wrong happened! - deleteUserByUID()", null);
  }
};

/**
 * deletes All Users
 */
export const deleteAllUsers = async () => {
  try {
    const usersCollectionSnapshot = await db.collection(USERS_COLLECTION).get();
    if (usersCollectionSnapshot.size === 0) {
      return new Result(200, "No Users to be delted.", null);
    }
    const dbBatch = db.batch();
    usersCollectionSnapshot.forEach((doc) => dbBatch.delete(doc.ref));
    await dbBatch.commit();
    return new Result(
      200,
      "All users have been successfully deleted.",
      null
    );
  } catch (error) {
    console.log(error)
    return new Result(401, "Something went wrong! - deleteAllUsers()", null);
  }
};

/**
 * Fetch all users in the user collection.
 */
export const getAllUsers = async () => {
  var userList: User[] = [];
  try {
    const usersDocList = await db.collection(USERS_COLLECTION).listDocuments();
    usersDocList.forEach(async (userSnapshot) => {
      const user = await userSnapshot.get();
      userList.push(user.data as User);
    });
    return new Result(200, "success", userList);
  } catch (error) {
    console.log(error)
    return new Result(400, "Error retrieiving users", null);
  }
};