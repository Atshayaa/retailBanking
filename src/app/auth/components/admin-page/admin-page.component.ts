import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.module';
import { userRegistrationService } from '../userRegistration/userRegistration.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public name = "Admin";
  registers : Register[];

  constructor(private _userRegistrationService: userRegistrationService) {} 

  ngOnInit(): void {
    this.registers = this._userRegistrationService.getUser();
  }
  

}
