import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClearTransactionsService {

  baseApiUrl_current = "http://localhost:8080/delete_current";
  baseApiUrl_archive = "http://localhost:8080/delete_archive";

  constructor(private http:HttpClient) { }

  delete_current() : Observable<any>{
    return this.http.delete<any>(this.baseApiUrl_current);
  }

  delete_archive() : Observable<any>{
    return this.http.delete<any>(this.baseApiUrl_archive);
  }
}

