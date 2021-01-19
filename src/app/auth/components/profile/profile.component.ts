import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.module';
import { userRegistrationService } from '../userRegistration/userRegistration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public name = "User1";
  registers : Register[];

  constructor(private _userRegistrationService: userRegistrationService) { }

  ngOnInit(): void {
    this.registers = this._userRegistrationService.getUser();
  }

}
