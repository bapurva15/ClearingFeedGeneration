import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionValidComponent } from './components/transaction-valid/transaction-valid.component';
import { TransactionInvalidComponent } from './components/transaction-invalid/transaction-invalid.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ClearTransactionsComponent } from './components/clear-transactions/clear-transactions.component';

import { FileUploadService } from './components/file-upload/file-upload.service';
import { TransactionListService } from './components/transaction-list/transaction-list.service';
import { TransactionValidService } from './components/transaction-valid/transaction-valid.service';
import { TransactionInvalidService } from './components/transaction-invalid/transaction-invalid.service';
import { ClearTransactionsService } from './components/clear-transactions/clear-transactions.service';


@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionValidComponent,
    TransactionInvalidComponent,
    FileUploadComponent,
    ClearTransactionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule, 
    AppRoutingModule,    
    HttpClientModule
  ],
  providers: [
    TransactionListService,
    TransactionValidService,
    TransactionInvalidService,
    FileUploadService,
    ClearTransactionsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
