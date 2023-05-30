import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AllPostsService } from '../services/all-posts.service';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  search = new FormControl('', [Validators.required])
  posts:any 
  message:any
  title:any
  dataUser: any
  date: any
  name: any
  filterData: any = []
  constructor(private allPostSrv: AllPostsService) {}

  ngOnInit(): void {

      this.getPosts()
     
  }

  getPosts(){
    this.allPostSrv.getPost().subscribe(res =>{
      this.posts = res
      this.posts.forEach((element: any) => {
        this.title= element.title
        this.message= element.message
        this.date = element.date
        this.name = element.name
      });
      console.log(this.posts)
    })
  }

  // filter(ev:any) {    
  //   this.search = ev.target.value.toString().toLowerCase();
  //   this.filterData = this.posts.filter((f:any) => {
  //     if (
  //       f.title.toString().toLowerCase().includes(this.search) ||
  //       f.message.toString().toLowerCase().includes(this.search)
  //     ) {
  //       return f;
  //     }
  //   });
  // }


}
