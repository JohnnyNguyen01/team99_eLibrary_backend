import { FirebaseError } from "@firebase/app";
import AuthEmailPassword from "../models/auth.model";
import Result from "../models/result.model";
import AuthRepoImplementation from "../repositories/auth.repository";

const authRepo = new AuthRepoImplementation();

/**
 * Sign's in a user using thier email and password
 * @param emailPassword - Email and Password body
 * @returns A `Result` with a `User` | `null`
 */
export const loginWithEmailPassword = async (
  emailPassword: AuthEmailPassword
): Promise<Result> => {
  if (emailPassword.email !== null && emailPassword.password !== null) {
    return await authRepo.signInWithEmailPassword(emailPassword);
  } else {
    return new Result(
      400,
      `Unsuccusseful sign in of ${emailPassword.email}`,
      null
    );
  }
};

/**
 * Get the current Authentication State
 */
export const authState = (): Result => {
  const state = authRepo.authState();
  console.log(state);
  return new Result(200, `current AuthState: ${state}`, state);
};

/**
 * Sign out the current user
 */
export const signOut = async (): Promise<void> => {
  await authRepo.signOut();
};
