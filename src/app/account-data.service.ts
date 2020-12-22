import { HttpClient } from '@angular/common/http';
import { IAccountData } from './account-data';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountDataService {
  url = 'http://localhost:8080/api/getbalance';

  constructor(private http: HttpClient) {}

  getAccountData(): Observable<IAccountData[]> {
    return this.http.get<IAccountData[]>(this.url);
  }
}
