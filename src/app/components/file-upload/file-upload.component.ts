import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

 loading: boolean = false; // Flag variable
 file?: File; // Variable to store file

 // Inject service 
 constructor(private service: FileUploadService) { }

 ngOnInit(): void {
 }

 // On file Select
 onChange(event:any) {
     this.file = event.target.files[0];
 }

 // OnClick of button Upload
 onUpload() {
     this.loading = !this.loading;
     console.log(this.file);
     this.service.uploadFile(this.file).subscribe(
         (event) => {
             if (typeof (event) === 'object') {
                 this.loading = false; // Flag variable 
             }
         }
     );
 }
}
