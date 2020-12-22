import { HttpClient } from '@angular/common/http';
import { ITransactions } from '../app/transactions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionsService {
  url = 'http://localhost:8080/api/getbalance';
  // instantiate HttpClient as http
  constructor(private http: HttpClient) {}

  getTransactions(): Observable<ITransactions[]> {
    return this.http.get<ITransactions[]>(this.url);
  }
}
