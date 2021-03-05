import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserI } from 'src/app/shared/interfaces/users.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ForgetComponent } from '../forget/forget.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  reset: any;
  errorEmail: any;
  
  constructor(public dialog: MatDialog,
    private dialogRef: MatDialogRef<ResetComponent>,
    private authServ: AuthService) { }

  ngOnInit(): void {

    this.reset = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });

  }

  resetPassword(form: UserI) {
    this.authServ.resetPassword(form)
      .then(res => {
        this.dialogRef.close();
        const dialogRef = this.dialog.open(ForgetComponent, {
          height: 'auto',
          minHeight: '70vh',
          minWidth: '50vw',
          width: 'auto',
        });
      })
      .catch(err => {
        let errores: string = err.code
        switch (errores) {
          case "auth/invalid-email":
            this.errorEmail = "Correo Invalido";
            break;

          case "auth/user-not-found":
            this.errorEmail = "Usuario Invalido";
            break;

          case "auth/too-many-requests":
            this.errorEmail = "Muchos intentos con este Usuario";
            break;

          default:
            this.errorEmail = "Error";
            break;
        }
      })
  };

  openSesion() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginComponent, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });
  }

  closeWdw(): void {
    this.dialogRef.close();
  }

}
