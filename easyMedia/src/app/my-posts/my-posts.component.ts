import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyPostsService } from '../services/my-posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})

export class MyPostsComponent implements OnInit{
  publication = true
  date = new Date()
  name = 'Juan Gualteros'
  message: any
  title:any
  id:any
  myPosts: any
  constructor(private activatedRoute: ActivatedRoute, private myPostSrv: MyPostsService){
    this.getMyPosts()
  }

  ngOnInit(): void {
    // const params = this.activatedRoute.snapshot.params;
    // if (params['id_user']){
    //   this.myPostSrv.getMyPost(params['id_user'])
    //     .subscribe(
    //       res=>{
    //         console.log(res)
          
    //       },
    //       err => console.error(err)
    //     )
    // }
  }

  getMyPosts(){
    this.myPostSrv.getMyPost('1').subscribe((res:any)=>{
      this.myPosts = res
      this.myPosts.forEach((element: any) => {
        this.title= element.title
        this.message= element.message
        this.date = element.date
        this.name = element.name
      });
      console.log(this.myPosts)
    })
    }
  
}
