import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction-list.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transaction =[ 1234,
    '23-01-2021',
    'SBIN',
    '2399008877',
    'ICICI',
    '09771000098',
    77.89,
    "INR"
  ]

  transactions = [
    {
    txnRef : 1234,
    date : '23-01-2021',
    payer : 'SBIN',
    payerAc : '2399008877',
    payee : 'ICICI',
    payeeAc : '09771000098',
    amount : 77.89,
    currency : "INR",
    status : "Valid"
    },
    {
      txnRef : 5678,
      date : '23-01-2021',
      payer : 'SBIN',
      payerAc : '2399008877',
      payee : 'ICICI',
      payeeAc : '09771000098',
      amount : 77.89,
      currency : "INR",
      status : "Invalid"
      }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
