import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.module';
import { userRegistrationService } from '../userRegistration/userRegistration.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  registers : Register[];

  constructor(private _userRegistrationService: userRegistrationService) { }

  ngOnInit(): void {
      this.registers = this._userRegistrationService.getUser();
  }

}
