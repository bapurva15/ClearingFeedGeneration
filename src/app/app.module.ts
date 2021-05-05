import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionValidComponent } from './components/transaction-valid/transaction-valid.component';
import { TransactionInvalidComponent } from './components/transaction-invalid/transaction-invalid.component';

import { TransactionListService } from './services/transaction-list.service';
import { TransactionInvalidService } from './services/transaction-invalid.service';
import { TransactionValidService } from './services/transaction-valid.service';
import { RouterModule } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/login/login.component';
import { FileUploadService } from './services/file-upload.service';
import { LoginService } from './services/login.service';




@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionValidComponent,
    TransactionInvalidComponent,
    FileUploadComponent,
    LoginComponent   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([  
      { path: "valid", component: TransactionValidComponent },  
      {path: 'all', component: TransactionListComponent},  
      {path: "invalid" , component:TransactionInvalidComponent}  
     ]), 
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [
    TransactionListService,
    TransactionValidService,
    TransactionInvalidService,
    FileUploadService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
