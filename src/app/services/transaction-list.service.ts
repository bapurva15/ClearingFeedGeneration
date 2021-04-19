import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionArchive } from '../models/transaction-list.model';
//import { Transaction } from './transaction-list/transaction-list.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionListService {

  constructor(private http:HttpClient) { }

  public showTransactions():Observable<TransactionArchive[]>{
      return this.http.get<TransactionArchive[]>('http://localhost:8080/archive')
      
  }
}
