import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.module';
import { userRegistrationService } from '../userRegistration/userRegistration.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public name = "User1";
  registers : Register[];

  constructor(private _userRegistrationService: userRegistrationService) { }

  ngOnInit(): void {
    this.registers = this._userRegistrationService.getUser();
  }

}
