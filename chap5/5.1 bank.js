class Client {
  constructor(clientName, pocketMoney) {
    this.clientName = clientName;
    this.pocketMoney = pocketMoney;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }
}

class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(client, accountNumber, initialBalance) {
    if (initialBalance <= 0) {
      throw new Error("Initial balance should be greater than 0.");
    }

    const account = {
      client,
      accountNumber,
      balance: initialBalance,
    };

    client.addAccount(account);
    this.accounts.push(account); // Adding the account to the bank's records
    return account;
  }

  deposit(account, amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount!");
    }

    account.balance += amount;
    console.log(`Deposited ${amount} to account ${account.accountNumber}.`);
    console.log(`New balance: ${account.balance}`);
  }

  retrieve(account, amount) {
    if (amount <= 0 || amount > account.balance) {
      throw new Error("Insufficient balance or invalid retrieval amount!");
    }

    account.balance -= amount;
    console.log(`Retrieved ${amount} from account ${account.accountNumber}.`);
    console.log(`New balance: ${account.balance}`);
  }

  getAccountInfo(account) {
    return {
      accountNumber: account.accountNumber,
      balance: account.balance,
    };
  }

  getAllAccounts() {
    return this.accounts;
  }
}

const bank = new Bank();

const johnDoe = new Client("John Doe", 500);
const janeSmith = new Client("Jane Smith", 1000);

const account1 = bank.createAccount(johnDoe, "123456", 1000);
const account2 = bank.createAccount(johnDoe, "987654", 2000);
const account3 = bank.createAccount(janeSmith, "555555", 1500);

try {
  bank.deposit(account1, 500);
  bank.retrieve(account1, 2000);
} catch (error) {
  console.error(error.message);
}

const allAccounts = bank.getAllAccounts();
console.log(allAccounts);
