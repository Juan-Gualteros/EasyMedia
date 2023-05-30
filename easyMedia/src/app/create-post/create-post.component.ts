import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { CreateService } from '../services/create.service';
import { posts } from '../models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  title = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  date = new Date();
  name = 'Juan Gualteros';
  info: posts = {
    title: '',
    message: '',
    id_user: 2
  };
  check = true
  constructor(public dialog: MatDialog, private createSrv: CreateService) {
    console.log(this.date);
  }

  openDialog(check: boolean): void {
    const dialogRef = this.dialog.open(DialogComponent, { width: '10%' });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  create() {
    if (this.info.message && this.info.title != '') {
      this.createSrv.create(this.info).subscribe((res) => {
        if (res != ' ') {
          this.openDialog((this.check));
        }
        this.info.message = ''
        this.info.title = ''
      });
    } else this.openDialog(!this.check);
  }
}
