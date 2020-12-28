export interface IAccountData {
  currency: string;
  account: IAccount;
  transactions: ITransactions[];
}

export interface ITransactions {
  date?: string;
  amount: number;
  description: string;
  from?: string;
  to?: string;
}

export interface IAccount {
  name?: string;
  iban?: string;
  balance?: number;
}
