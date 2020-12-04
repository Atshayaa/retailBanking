import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userRegistrationService } from '../userRegistration/userRegistration.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  fullName: string = "";
  userId: number = null;
  email: string = "";
  password: string = "";

  constructor(private _userRegistrationService: userRegistrationService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  saveRegister(registerForm : NgForm): void {
    this._userRegistrationService.save(registerForm.value); 
    this._router.navigate(['listuser']);   
  }
}
