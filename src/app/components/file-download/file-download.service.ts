import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  baseApiUrl = "http://localhost:8080/files/${filename}"
  constructor(private http:HttpClient) { }

  downloadFile() : Observable<any>{  
  return this.http.get<any>(this.baseApiUrl);
  }
}