import IAuthRepository from "./interfaces/authentication.interface";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  Unsubscribe,
  User,
} from "firebase/auth";
import { firebaseApp } from "..";
import AuthEmailPassword from "../models/auth.model";
import Result from "../models/result.model";
import { FirebaseError } from "@firebase/app";

// TODO: Implement Auth erros [Johnny]
// https://firebase.google.com/docs/reference/js/auth#autherrorcodes

export default class AuthRepoImplementation implements IAuthRepository {
  authState(): Promise<User | undefined> | Unsubscribe {
    const auth = getAuth(firebaseApp);
    return auth.onAuthStateChanged(
      (user) => user,
      (err) => err,
      () => {
        console.log("Completed");
        return "authState completed";
      }
    );
  }

  async signInWithEmailPassword(
    emailPassword: AuthEmailPassword
  ): Promise<Result> {
    try {
      const auth = getAuth(firebaseApp);
      const credential = await signInWithEmailAndPassword(
        auth,
        emailPassword.email ?? "",
        emailPassword.password ?? ""
      );

      return new Result(
        200,
        `Successfully Signed in ${emailPassword.email}`,
        credential.user
      );
    } catch (err) {
      const error = err as FirebaseError;
      return new Result(
        Number.parseInt(error.code) ?? 400,
        `Unsuccusseful sign in of ${emailPassword.email} : ${error.message}`,
        null
      );
    }
  }

  async signOut(): Promise<void | FirebaseError> {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      return error as FirebaseError;
    }
  }
}
