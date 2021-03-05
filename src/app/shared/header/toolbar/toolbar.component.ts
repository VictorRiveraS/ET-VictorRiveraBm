import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserI } from '../../interfaces/users.interface';
import { StoreService } from '../../services/store.service';
import { RegisterI } from '../../interfaces/register.interface';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public logout:boolean =false;  

  constructor(public authServ: AuthService,
    private route: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void { }


  abrirSesion() {

    const dialogRef = this.dialog.open(Login, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });

  }

  abrirRegistro() {
    const dialogRef = this.dialog.open(Registro, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });

  }

  onLogout(): void {
    this.authServ.logout();
    this.route.navigate([''])
  }

}


@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss']
})

export class Login implements OnInit {


  constructor(public dialog: MatDialog,
    private dialogRef: MatDialogRef<Login>,
    private authServ: AuthService,
    private route: Router) { }

  ngOnInit(): void {
    this.acceso = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minPw)])
    });
  }

  public acceso: any;
  hide = true;
  minPw = 8;
  errorEmail: any;
  errorPassword: any;

  logueo(form: UserI) {
    this.authServ.loginbyEmail(form)
      .then(res => {
        localStorage.setItem('email', this.acceso.get('email').value);
        localStorage.setItem('password', this.acceso.get('password').value);
        this.dialogRef.close();
        this.route.navigate(["/news"]);
      })
      .catch(err => {
        let errores: string = err.code
        switch (errores) {
          case "auth/invalid-email":
            this.errorEmail = "Correo Invalido";
            break;

          case "auth/wrong-password":
            this.errorPassword = "Contraseña Equivocada";
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
  }

  abrirRegistro() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(Registro, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });
  }

  abrirOlvidada() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(Reseteo, {
      height: 'auto',
      minWidth: '70vw',
      minHeight: '50vh',
      width: 'auto',
    });
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'registro',
  templateUrl: 'registro.html',
  styleUrls: ['./registro.scss']
})
export class Registro {
  constructor(public dialog: MatDialog,
    private dialogRef: MatDialogRef<Registro>,
    private authServ: AuthService,
    private regServ: StoreService,
    private formBuilder: FormBuilder) { }
  hide = true;
  minPw = 8;
  minCel = 10;
  public registrarse: any;

  ngOnInit(): void {

    this.registrarse = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      primerApellido: new FormControl('', [Validators.required]),
      segundoApellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(this.minCel)]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minPw)])
    });

  }



  registro(form: UserI, form1: RegisterI) {
    let celular1: string = form1.celular.toString()
    let celular2: number = celular1.length
    let celular3 = Number(form1.celular)

    if (form1.nombres != "" && form1.primerApellido != "" && form1.segundoApellido != "" && form1.correo != "" && form1.contraseña != "" && celular1 != "" && celular2 > 9 && form1.celular == celular3) {
      this.authServ.registerUser(form)
        .then(res => {
          this.regServ.salvarDatos(this.registrarse.value)
          this.dialogRef.close();
          const dialogRef = this.dialog.open(Login, {
            height: 'auto',
            minHeight: '90vh',
            minWidth: '50vw',
            width: 'auto',
          });
        })
    }
  };

  abrirSesion() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(Login, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'olvidada',
  templateUrl: 'olvidada.html',
  styleUrls: ['./olvidada.scss']
})
export class Olvidada {

  constructor(public dialog: MatDialog,
    private dialogRef: MatDialogRef<Olvidada>,
    private authServ: AuthService) { }

  ngOnInit(): void { }



  abrirSesion() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(Login, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'reseteo',
  templateUrl: 'reseteo.html',
  styleUrls: ['./reseteo.scss']
})
export class Reseteo {

  constructor(public dialog: MatDialog,
    private dialogRef: MatDialogRef<Reseteo>,
    private authServ: AuthService) { }

  reseteo = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void { }
  reseteoContrasena(form: UserI) {
    this.authServ.resetPassword(form)
      .then(res => {
        this.dialogRef.close();
        const dialogRef = this.dialog.open(Login, {
          height: 'auto',
          minHeight: '90vh',
          minWidth: '50vw',
          width: 'auto',
        });
      })
  };

  abrirSesion() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(Login, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });
  }

  cerrar(): void {
    this.dialogRef.close();
  }

} 
