import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  public transactions: object[] = [];
  constructor(private _transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this._transactionsService.getTransactions().subscribe((data: any) => {
      const transactions = data.transactions.map(
        (transaction: any) => transaction
      );
      this.transactions = transactions;
      console.log(transactions);
    });
  }
}
