import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearTransactionsComponent } from './components/clear-transactions/clear-transactions.component';
import { FileDownloadComponent } from './components/file-download/file-download.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TransactionInvalidComponent } from './components/transaction-invalid/transaction-invalid.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionValidComponent } from './components/transaction-valid/transaction-valid.component';

const routes: Routes = [
  { path: "valid", component: TransactionValidComponent },
  { path: "archive", component: TransactionListComponent },
  { path: "invalid", component: TransactionInvalidComponent },
  { path: "upload", component: FileUploadComponent },
  { path: "clear", component: ClearTransactionsComponent},
  { path: "download", component: FileDownloadComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  TransactionListComponent,
  TransactionValidComponent,
  TransactionInvalidComponent,
  FileUploadComponent,
  FileDownloadComponent,
  ClearTransactionsComponent,
  PageNotFoundComponent
]
