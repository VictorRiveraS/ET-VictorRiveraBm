import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/interfaces/users.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterComponent } from '../register/register.component';
import { ResetComponent } from '../reset/reset.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public access: any;
  public hide = true;
  public minPw = 8;
  public errorEmail: any;
  public errorPassword: any;
  public user$: any;

  constructor (public dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>,
    private authServ: AuthService,
    private route: Router) { }

  ngOnInit (): void {
    this.access = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minPw)])
    });
  }

  login (form: UserI) {
    this.authServ.loginbyEmail(form)
      .then((res: any) => {
        this.dialogRef.close();
        this.route.navigate(['/news']);
      })
      .catch((err: { code: string; }) => {
        const errores: string = err.code
        switch (errores) {
          case 'auth/invalid-email':
            this.errorEmail = 'Correo Invalido';
            break;

          case 'auth/wrong-password':
            this.errorPassword = 'Contraseña Equivocada';
            break;

          case 'auth/user-not-found':
            this.errorEmail = 'Usuario Invalido';
            break;

          case 'auth/too-many-requests':
            this.errorEmail = 'Muchos intentos con este Usuario';
            break;

          default:
            this.errorEmail = 'Error';
            break;
        }
      });
  }

  openRegister () {
    this.dialogRef.close();
    this.dialog.open(RegisterComponent, {
      height: 'auto',
      minHeight: '10vh',
      minWidth: '50vw',
      width: 'auto'
    });
  }

  openReset () {
    this.dialogRef.close();
    this.dialog.open(ResetComponent, {
      height: 'auto',
      minWidth: '70vw',
      minHeight: '50vh',
      width: 'auto'
    });
  }

  closeWdw (): void {
    this.dialogRef.close();
  }
}
