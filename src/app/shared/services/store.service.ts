import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { RegisterI } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private Storeusers = 'Usuarios Registrados';

  constructor (private angSt: AngularFirestore) { }

  userSave (user: RegisterI) {
    return this.angSt.collection(this.Storeusers).add(user);
  }
}
