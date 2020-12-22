import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public account: object[] = [];
  public currency: any;
  constructor(private _transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this._transactionsService.getTransactions().subscribe((data: any) => {
      const account = data.account;
      const currency = data.currency;
      this.account = account;
      this.currency = currency;
    });
  }
}
