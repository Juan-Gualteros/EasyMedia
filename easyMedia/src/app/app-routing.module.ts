import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'all-posts', component: AllPostsComponent},
  {path: 'my-posts', component: MyPostsComponent},
  {path: 'create-post', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
