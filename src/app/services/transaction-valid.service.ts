import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionValid } from '../models/transaction-valid.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionValidService {

  constructor(private http:HttpClient) { }

  public showTransactions():Observable<TransactionValid[]>{
      return this.http.get<TransactionValid[]>('http://localhost:8080/current_valid')
      
  }
}
