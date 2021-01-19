import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { accountService } from '../account/accountService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account-details',
  templateUrl: './add-account-details.component.html',
  styleUrls: ['./add-account-details.component.css']
})
export class AddAccountDetailsComponent implements OnInit {

  accountNumber: string = "";
  accountType: string = "";
  balance: string = "";
  lastTransactionTime: string = "";
  lastTransactionDate: string = "";

  constructor(private _accountService: accountService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  saveRegister(addAccountDetailsForm : NgForm): void {
    this._accountService.save(addAccountDetailsForm.value); 
    this._router.navigate(['listAccountDetails']);   
  }

}
