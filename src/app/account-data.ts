export interface IAccountData {
  currency: string;
  account: IAccount;
  transactions: ITransactions[];
}

interface ITransactions {
  date: string;
  amount: number;
  description: string;
}

interface IAccount {
  name: string;
  iban: string;
  balance: number;
}
