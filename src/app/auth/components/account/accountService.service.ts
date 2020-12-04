import { Injectable } from '@angular/core';
import { Account } from '../../models/account.module';

@Injectable()
export class accountService {
    private listAccountUser1: Account[] = [
        {
            AccountNumber: '1247478585',
            AccountType: 'Savings Account',
            Balance: '5000',
            LastTransactionDate: '09/10/2020',
            LastTransactionTime: '14:00:00'
        },
        {
            AccountNumber: '2347478585',
            AccountType: 'Current Account',
            Balance: '5000',
            LastTransactionDate: '01/10/2020',
            LastTransactionTime: '18:00:00'
        },
        
    ];
    private listAccountUser2: Account[] = [
        {
            AccountNumber: '8977478585',
            AccountType: 'Savings Account',
            Balance: '3000',
            LastTransactionDate: '22/10/2020',
            LastTransactionTime: '12:00:00'
        },
        {
            AccountNumber: '9977478585',
            AccountType: 'Current Account',
            Balance: '4000',
            LastTransactionDate: '29/10/2020',
            LastTransactionTime: '06:00:00'
        },        
    ];

    getAccount(): Account[]{
        return this.listAccountUser1;
    }

    save(account: Account) {
        this.listAccountUser1.push(account);
        console.log(this.getAccount());
    }
}
