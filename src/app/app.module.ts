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




@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionValidComponent,
    TransactionInvalidComponent    
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
    TransactionInvalidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
