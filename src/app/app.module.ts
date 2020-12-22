import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsService } from './transactions.service';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [AppComponent, TransactionsComponent, AccountComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TransactionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
