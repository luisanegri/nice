import { Component, OnInit } from '@angular/core';
import { IAccount } from '../account-data';
import { AccountDataService } from '../account-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public account?: IAccount;
  public currency: any;
  public error: any;

  constructor(private _AccountDataService: AccountDataService) {}

  ngOnInit(): void {
    this._AccountDataService.getAccountData().subscribe(
      (data) => {
        const account = data.account;
        const currency = data.currency;
        this.account = account;
        this.currency = currency;
      },
      (error: any) => (this.error = error)
    );
  }
}
