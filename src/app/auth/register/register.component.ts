import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterI } from 'src/app/shared/interfaces/register.interface';
import { UserI } from 'src/app/shared/interfaces/users.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public hide = true;
  public minPw = 8;
  public minCel = 10;
  public register: any;

  constructor(public dialog: MatDialog,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private authServ: AuthService,
    private regServ: StoreService) { }

  ngOnInit(): void {

    this.register = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      primerApellido: new FormControl('', [Validators.required]),
      segundoApellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(this.minCel)]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minPw)])
    });

  }

  registerUser(form: UserI, form1: RegisterI) {
    let celular1: string = form1.celular.toString()
    let celular2: number = celular1.length
    let celular3 = Number(form1.celular)

    if (form1.nombres != "" && form1.primerApellido != "" && form1.segundoApellido != "" && form1.correo != "" && form1.contraseña != "" && celular1 != "" && celular2 > 9 && form1.celular == celular3) {
      this.authServ.registerUser(form)
        .then(res => {
          this.regServ.salvarDatos(this.register.value)
          this.dialogRef.close();
          this.dialog.open(LoginComponent, {
            height: 'auto',
            minHeight: '90vh',
            minWidth: '50vw',
            width: 'auto',
          });
        })
    }
  };

  openSession() {
    this.dialogRef.close();
    this.dialog.open(LoginComponent, {
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
