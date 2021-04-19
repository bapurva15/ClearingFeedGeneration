import { Component, OnInit } from '@angular/core';
import { TransactionInvalid } from 'src/app/models/transaction-invalid.model';
import { TransactionInvalidService } from 'src/app/services/transaction-invalid.service';

@Component({
  selector: 'app-transaction-invalid',
  templateUrl: './transaction-invalid.component.html',
  styleUrls: ['./transaction-invalid.component.css']
})
export class TransactionInvalidComponent implements OnInit {

  Title="Fetch invalid data only from server"
  transactions? : TransactionInvalid[];
  constructor(private service:TransactionInvalidService) { }

  ngOnInit(): void {
    this.service.showTransactions().subscribe(response=>{this.transactions=response});
  }

}
