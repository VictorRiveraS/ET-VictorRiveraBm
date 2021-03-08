import { Injectable } from '@angular/core';
import { UserI } from '../interfaces/users.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<firebase.User> | any;

  constructor (private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
  }

  loginbyEmail (user: UserI) {
    const { email, password } = user;
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout () {
    this.afAuth
      .auth
      .signOut();
  }

  registerUser (user: UserI) {
    const { email, password } = user
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  resetPassword (user: UserI) {
    const { email } = user
    return this.afAuth
      .auth
      .sendPasswordResetEmail(email);
  }

  getUserAuth () {
    return this.afAuth.authState
  }
}
