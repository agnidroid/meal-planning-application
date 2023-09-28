import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg="";

  constructor(private service:RegistrationService , private router: Router ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=> {
        console.log("response recieved")
        this.router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
      this.msg="Bad credentials, please enter valid emailId and password";
      }
      )
  }
  gotoregistration(){
    this.router.navigate(['/registration']);
    
  }

}
