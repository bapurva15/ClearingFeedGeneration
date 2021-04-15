import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-valid',
  templateUrl: './transaction-valid.component.html',
  styleUrls: ['./transaction-valid.component.css']
})
export class TransactionValidComponent implements OnInit {

  title = 'Fetch valid data only from server'
  
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
      status : "Valid"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
