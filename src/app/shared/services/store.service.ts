import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { RegisterI } from '../interfaces/register.interface'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor (private angSt: AngularFirestore) { }

  private Usuarios = 'Usuarios Registrados';

  salvarDatos (user: RegisterI) {
    return this.angSt.collection(this.Usuarios).add(user)
  }
}
