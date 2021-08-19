import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionInvalidComponent } from './components/transaction-invalid/transaction-invalid.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionValidComponent } from './components/transaction-valid/transaction-valid.component';

const routes: Routes = [  
  { path: "valid", component: TransactionValidComponent },  
  {path: 'all', component: TransactionListComponent},
  {path: "invalid" , component:TransactionInvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
