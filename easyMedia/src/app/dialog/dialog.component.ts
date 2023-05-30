import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  check = true
  dialog:any
  constructor( public dialogRef: MatDialogRef<DialogComponent>,
   @Inject(MAT_DIALOG_DATA) public message: string) {   }

  ngOnInit(): void {
      
  }

  onClickNO(): void{
    this.dialogRef.close()
   }
}
