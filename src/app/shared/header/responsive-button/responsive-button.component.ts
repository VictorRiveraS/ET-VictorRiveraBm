import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-responsive-button',
  templateUrl: './responsive-button.component.html',
  styleUrls: ['./responsive-button.component.scss']
})
export class ResponsiveButtonComponent implements OnInit {
  public email:any;

  constructor (public authServ: AuthService,
    private route: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ResponsiveButtonComponent>) { }

  ngOnInit (): void {
    this.email = localStorage.getItem('email');
  }

  closeWdw (): void {
    this.dialogRef.close();
  }

  onLogout (): void {
    this.authServ.logout();
    this.dialogRef.close();
    this.route.navigate(['']);
  }
}
