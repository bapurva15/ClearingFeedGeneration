import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//import { Transaction } from './transaction-list/transaction-list.model';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  baseApiUrl = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  uploadFile(file:any):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl + "/upload", formData)
}

downloadFile():string{
  
  return window.URL.createObjectURL(this.http.get<any>( this.baseApiUrl + "/files/sample.txt"))


}
}