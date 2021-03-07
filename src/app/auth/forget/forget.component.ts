import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss'],
})
export class ForgetComponent implements OnInit {
  constructor (private dialog: MatDialog,
    private dialogRef: MatDialogRef<ForgetComponent>) { }

  ngOnInit (): void { }

  openSession () {
    this.dialogRef.close()
    this.dialog.open(LoginComponent, {
      height: 'auto',
      minHeight: '90vh',
      minWidth: '50vw',
      width: 'auto'
    });
  }

  closeWdw (): void {
    this.dialogRef.close();
  }
}
