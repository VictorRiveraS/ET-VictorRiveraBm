import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { ResponsiveButtonComponent } from '../responsive-button/responsive-button.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public email: any;

  constructor (public authServ: AuthService,
    private route: Router,
    private dialog: MatDialog) {}

  ngOnInit (): void {
    this.authServ.getUserAuth().subscribe((data) => {
      this.email = data?.email
    })
  }

  openSession () {
    this.dialog.open(LoginComponent, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto'
    });
  }

  openRegister () {
    this.dialog.open(RegisterComponent, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto'
    });
  }

  openResponsive () {
    this.dialog.open(ResponsiveButtonComponent, {
      height: '30vh',
      width: '30vw',
      position: {
        top: '0px',
        right: '0px'
      }
    });
  }

  onLogout (): void {
    this.authServ.logout()
    this.route.navigate([''])
  };
}
