import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../account-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public account: object[] = [];
  public currency: any;
  constructor(private _AccountDataService: AccountDataService) {}

  ngOnInit(): void {
    this._AccountDataService.getAccountData().subscribe((data: any) => {
      const account = data.account;
      const currency = data.currency;
      this.account = account;
      this.currency = currency;
    });
  }
}
