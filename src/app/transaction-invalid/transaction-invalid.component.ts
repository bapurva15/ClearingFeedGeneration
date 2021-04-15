import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-invalid',
  templateUrl: './transaction-invalid.component.html',
  styleUrls: ['./transaction-invalid.component.css']
})
export class TransactionInvalidComponent implements OnInit {

  itle="Fetch invalid data only from server"
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
    status : "Invalid"
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
