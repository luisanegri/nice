import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  public transactions: object[] = [];
  // instance of transactionsService
  constructor(private _transactionsService: TransactionsService) {}

  ngOnInit(): void {
    // so we have getTransactions method
    // this method returns an observable
    // to receive data we need to subscribe it to the observable
    // then transactions data arrives assynchronously
    // then we assign the data to the transactions array
    this._transactionsService.getTransactions().subscribe((data: any) => {
      // this.transactions = data;
      // console.log(this.transactions);
      const transactions = data.transactions.map(
        (transaction: any) => transaction
      );
      this.transactions = transactions;
      console.log(transactions);
    });
  }
}
