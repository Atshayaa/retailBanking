import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.module';
import { accountService } from '../account/accountService.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts : Account[] ;
  constructor(private _accountService : accountService) { }

  ngOnInit(): void {
    this.accounts = this._accountService.getAccount();
  }

}
