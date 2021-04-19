import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionValidComponent } from './components/transaction-valid/transaction-valid.component';
import { TransactionInvalidComponent } from './components/transaction-invalid/transaction-invalid.component';

import { TransactionListService } from './services/transaction-list.service';
import { TransactionInvalidService } from './services/transaction-invalid.service';
import { TransactionValidService } from './services/transaction-valid.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionValidComponent,
    TransactionInvalidComponent    
  ],
  imports: [
    BrowserModule,
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
