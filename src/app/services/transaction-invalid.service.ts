import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionInvalid } from '../models/transaction-invalid.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionInvalidService {

  constructor(private http:HttpClient) { }

  public showTransactions():Observable<TransactionInvalid[]>{
    return this.http.get<TransactionInvalid[]>('http://localhost:8080/current_invalid')
  }
}
