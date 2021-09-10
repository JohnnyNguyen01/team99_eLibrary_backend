import { FirebaseError } from "@firebase/app";
import { Unsubscribe, User } from "@firebase/auth";
import AuthEmailPassword from "../../models/auth.model";
import Result from "../../models/result.model";

export default interface IAuthRepository {
  authState(): Promise<User | undefined> | Unsubscribe;

  /**
   * Signs in a user with an email and password
   * @param emailPassword - Email password body object
   */
  signInWithEmailPassword(emailPassword: AuthEmailPassword): Promise<Result>;

  /**
   * Signs out the current user
   */
  signOut(): Promise<void | FirebaseError>;
}
