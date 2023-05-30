import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  logIn: User={
    email: '',
    password: ''
  }
  userInfo: any
  @Output() messageEvent = new EventEmitter<string>()
  constructor(private loginSrv: LoginService, private route: Router, private activatedRoute: ActivatedRoute){
    this.getErrorMessage()
  
  }

   
  ngOnInit(): void {
   this.sendMessage()
    
  } 

  sendMessage(){
    this.messageEvent.emit(this.userInfo)
  }
  

  login(){
    this.loginSrv.login(this.logIn).subscribe((res: any) => {
      
      if(res.length>0 ){
        this.userInfo = res[0]
        this.messageEvent.emit(this.userInfo)
        console.log(this.userInfo)
        this.route.navigate(['/all-posts'])
      }
    
     
    }, (error) =>{
      this.getErrorMessage() 
      console.log(error.error.text)})
    
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Please provide a valid email' : '';
  }
}
