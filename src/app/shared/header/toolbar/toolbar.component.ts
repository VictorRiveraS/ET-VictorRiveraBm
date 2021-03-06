import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/auth/login/login.component'
import { RegisterComponent } from 'src/app/auth/register/register.component'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public logout:boolean = false;
  public email: any;

  constructor (private authServ: AuthService,
    private route: Router,
    private dialog: MatDialog) { }

  ngOnInit (): void { }

  openSession () {
    this.dialog.open(LoginComponent, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto'
    })
  }

  openRegister () {
    this.dialog.open(RegisterComponent, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto'
    })
  }

  onLogout (): void {
    this.authServ.logout()
    this.route.navigate([''])
  }
}
