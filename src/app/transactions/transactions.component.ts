import { Component, OnInit } from '@angular/core';
import { ITransactions } from '../account-data';
import { AccountDataService } from '../account-data.service';
import dateFormatter from './dateFormatter';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  public transactions?: ITransactions[];
  public currency: any;
  public error: any;

  constructor(private _AccountDataService: AccountDataService) {}

  ngOnInit(): void {
    this._AccountDataService.getAccountData().subscribe((data) => {
      const currency = data.currency;
      const transactions = data.transactions.map(
        (transaction: any) => {
          const transactions = {
            description: transaction.description,
            amount: transaction.amount,
            to: transaction.to,
            from: transaction.from,
            date: dateFormatter(transaction.date),
          };
          return transactions;
        },
        (error: any) => (this.error = error)
      );
      this.transactions = transactions;
      this.currency = currency;
    });
  }
}
