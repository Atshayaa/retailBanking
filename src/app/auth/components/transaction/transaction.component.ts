import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.module';
import { transactionService } from '../transaction/transactionService.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  show:boolean = true;
  transactions : Transaction[];

  constructor(private _transactionService : transactionService ) {}

  ngOnInit(): void {
    this.transactions = this._transactionService.getTransaction();
  }

}
