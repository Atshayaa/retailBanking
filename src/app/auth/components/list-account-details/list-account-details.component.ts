import { Component, OnInit } from '@angular/core';
import { accountService } from '../account/accountService.service';
import {Account} from '../../models/account.module';

@Component({
  selector: 'app-list-account-details',
  templateUrl: './list-account-details.component.html',
  styleUrls: ['./list-account-details.component.css']
})
export class ListAccountDetailsComponent implements OnInit {

  accounts : Account[];
  constructor(private _accountService: accountService) { }

  ngOnInit(): void {
    this.accounts = this._accountService.getAccount();
  }

}
