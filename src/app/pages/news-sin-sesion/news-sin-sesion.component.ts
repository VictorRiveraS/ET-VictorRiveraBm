import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/auth/login/login.component'
import { RegisterComponent } from 'src/app/auth/register/register.component'

@Component({
  selector: 'app-news-sin-sesion',
  templateUrl: './news-sin-sesion.component.html',
  styleUrls: ['./news-sin-sesion.component.scss']
})
export class NewsSinSesionComponent implements OnInit {
  constructor (private dialog: MatDialog) { }

  ngOnInit (): void {
  }

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
}
