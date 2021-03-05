import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private dialogRef: MatDialogRef<ForgetComponent>,
    private authServ: AuthService) { }

  ngOnInit(): void { }

  openSesion() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginComponent, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto',
    });
  };

  closeWdw(): void {
    this.dialogRef.close();
  };

}
