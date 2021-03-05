import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';


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


  openSesion() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });

  }

  openRegister() {
    const dialogRef = this.dialog.open(RegisterComponent, {
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