import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userRegistrationService } from '../userRegistration/userRegistration.service'
import { Router } from '@angular/router';
import { Register } from '../../models/register.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullName: string = "";
  userId: number = null;
  email: string = "";
  password: string = "";

  // register : Register = {
  // fullName: null,
  // userId: null,
  // email: null,
  // password: null
  // }
 
  constructor(private _userRegistrationService: userRegistrationService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  saveRegister(registerForm : NgForm): void {
    this._userRegistrationService.save(registerForm.value); 
    this._router.navigate(['login']);   
  }
}
