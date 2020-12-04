import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: number = null;
  password: string = "";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  loginFunction(loginForm : NgForm) : void {
    console.log(loginForm.value);
    if("1" === loginForm.value.userId || "Admin@hcl"=== loginForm.value.password){      
      this.router.navigate(['adminpage']);
    }
    else if("2" === loginForm.value.userId || "User1@hcl"=== loginForm.value.password){
      this.router.navigate(['userpage']);
    }
  }

  //  onSubmit(signInForm: NgForm) {
  //   console.log(signInForm.value);
  //   console.log("----", this.router);
  //   if("abc" === signInForm.value.email || "hcl"=== signInForm.value.password){      
  //     this.router.navigate(['list-product']);
  //   }
  //   else{
  //     console.log("login unsuccessful");
      
  //   }
}
