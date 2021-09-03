/**
 * Data Model Interfaces
 */

import User, { UserType } from "../models/user.model";
import db from "../index";
import { USERS_COLLECTION } from "../utils/firestore-collections.constants";

/**
 * Service Methods
 */

/**
 * Creates a new user on firestore
 * @param uid - the user's unique id
 * @param email = the user's email
 * @param firstName - user's first name
 * @param lastName - user's last name
 * @param isAdmin - defines whether user is an admin.
 */
export const createUser = async (
  uid?: string,
  email?: string,
  firstName?: string,
  lastName?: string,
  isAdmin?: boolean
): Promise<void> => {
  try {
    let user: UserType = {
      uid: uid,
      email: email,
      firstName: firstName,
      lastName: lastName,
      isAdmin: isAdmin,
    } as User;
    await db.collection(USERS_COLLECTION).add(user);
  } catch (error) {
    console.log(error);
  }
};
