import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction.module';

@Injectable()
export class transactionService {
    private listTransaction : Transaction[] = [
        {
            transactionDate: '26/10/2020',
            transactionRemarks: 'UPI transaction',
            transactionType: 'credit',
            balanceOnDate: '5000',
            transactionAmount: '500',
            fromAccountNumber: '234523456677',
            toAccountNumber: '989876765544',
            transactionTimeStamp: '26/10/2020 13:07:07',
            transactionId: '3456',
            transactionStatus: 'successful'
        },
        {
            transactionDate: '28/10/2020',
            transactionRemarks: 'UPI transaction',
            transactionType: 'credit',
            balanceOnDate: '5500',
            transactionAmount: '1000',
            fromAccountNumber: '764523456677',
            toAccountNumber: '989876765544',
            transactionTimeStamp: '28/10/2020 18:00:00',
            transactionId: '7456',
            transactionStatus: 'successful'
        },
        {
            transactionDate: '29/10/2020',
            transactionRemarks: 'ATM transaction',
            transactionType: 'debit',
            balanceOnDate: '6500',
            transactionAmount: '500',
            fromAccountNumber: '989876765544',
            toAccountNumber: '764523456677',
            transactionTimeStamp: '29/10/2020 18:30:15',
            transactionId: '9467',
            transactionStatus: 'successful'
        },
        {
            transactionDate: '02/11/2020',
            transactionRemarks: 'NEFT transaction',
            transactionType: 'debit',
            balanceOnDate: '6500',
            transactionAmount: '1000',
            fromAccountNumber: '989876765544',
            toAccountNumber: '114523456644',
            transactionTimeStamp: '02/11/2020 08:37:10',
            transactionId: '8765',
            transactionStatus: 'successful'
        },
        {
            transactionDate: '03/11/2020',
            transactionRemarks: 'NEFT transaction',
            transactionType: 'debit',
            balanceOnDate: '5500',
            transactionAmount: '1000',
            fromAccountNumber: '989876765544',
            toAccountNumber: '434523456690',
            transactionTimeStamp: '03/11/2020 08:37:10',
            transactionId: '4765',
            transactionStatus: 'unsuccessful'
        },
        {
            transactionDate: '03/11/2020',
            transactionRemarks: 'NEFT transaction',
            transactionType: 'debit',
            balanceOnDate: '5500',
            transactionAmount: '1000',
            fromAccountNumber: '989876765544',
            toAccountNumber: '434523456690',
            transactionTimeStamp: '03/11/2020 08:37:10',
            transactionId: '1765',
            transactionStatus: 'successful'
        },
        {
            transactionDate: '03/11/2020',
            transactionRemarks: 'NEFT transaction',
            transactionType: 'credit',
            balanceOnDate: '4500',
            transactionAmount: '3000',
            fromAccountNumber: '434523456690',
            toAccountNumber: '989876765544',
            transactionTimeStamp: '03/11/2020 18:27:10',
            transactionId: '2065',
            transactionStatus: 'successful'
        },
        {
            transactionDate: '10/11/2020',
            transactionRemarks: 'ATM transaction',
            transactionType: 'credit',
            balanceOnDate: '7500',
            transactionAmount: '1000',
            fromAccountNumber: '434523456690',
            toAccountNumber: '989876765544',
            transactionTimeStamp: '10/11/2020 01:37:10',
            transactionId: '3365',
            transactionStatus: 'successful'
        },
        {
            transactionDate: '11/11/2020',
            transactionRemarks: 'NEFT transaction',
            transactionType: 'debit',
            balanceOnDate: '8500',
            transactionAmount: '1000',
            fromAccountNumber: '989876765544',
            toAccountNumber: '434523456690',
            transactionTimeStamp: '11/11/2020 08:37:10',
            transactionId: '0765',
            transactionStatus: 'successful'
        },
        {
            transactionDate: '12/11/2020',
            transactionRemarks: 'UPI transaction',
            transactionType: 'credit',
            balanceOnDate: '7500',
            transactionAmount: '1000',
            fromAccountNumber: '764523456677',
            toAccountNumber: '989876765544',
            transactionTimeStamp: '12/11/2020 18:00:00',
            transactionId: '9956',
            transactionStatus: 'unsuccessful'
        },
        {
            transactionDate: '12/11/2020',
            transactionRemarks: 'UPI transaction',
            transactionType: 'credit',
            balanceOnDate: '7500',
            transactionAmount: '1000',
            fromAccountNumber: '764523456677',
            toAccountNumber: '989876765544',
            transactionTimeStamp: '12/11/2020 18:00:00',
            transactionId: '0456',
            transactionStatus: 'successful'
        },

        
    ];
    
    getTransaction(): Transaction[]{
        return this.listTransaction;
    }

    save(transaction: Transaction) {
        this.listTransaction.push(transaction);
        console.log(this.getTransaction());
    }
}
