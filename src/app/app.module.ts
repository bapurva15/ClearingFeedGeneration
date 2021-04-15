import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionValidComponent } from './transaction-valid/transaction-valid.component';
import { TransactionInvalidComponent } from './transaction-invalid/transaction-invalid.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionValidComponent,
    TransactionInvalidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
