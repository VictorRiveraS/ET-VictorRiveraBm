import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { RegisterI } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private Usuarios = 'Usuarios Registrados';

  constructor (private angSt: AngularFirestore) { }

  salvarDatos (user: RegisterI) {
    return this.angSt.collection(this.Usuarios).add(user);
  }
}
