import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../account-data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  public transactions: Object[] = [];
  constructor(private _AccountDataService: AccountDataService) {}

  ngOnInit(): void {
    this._AccountDataService.getAccountData().subscribe((data: any) => {
      const transactions = data.transactions.map(
        (transaction: any) => transaction
      );
      this.transactions = transactions;
      console.log(transactions);
    });
  }
}
