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

function createAccount(client, accountNumber, initialBalance) {
  if (initialBalance <= 0) {
    throw new Error("Initial balance should be greater than 0.");
  }

  const account = {
    client,
    accountNumber,
    balance: initialBalance,
  };

  client.addAccount(account);
  return account;
}

function createBank() {
  const accounts = [];

  function deposit(account, amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount!");
    }

    account.balance += amount;
    console.log(`Deposited ${amount} to account ${account.accountNumber}.`);
    console.log(`New balance: ${account.balance}`);
  }

  function retrieve(account, amount) {
    if (amount <= 0 || amount > account.balance) {
      throw new Error("Insufficient balance or invalid retrieval amount!");
    }

    account.balance -= amount;
    console.log(`Retrieved ${amount} from account ${account.accountNumber}.`);
    console.log(`New balance: ${account.balance}`);
  }

  function getAccountInfo(account) {
    return {
      accountNumber: account.accountNumber,
      balance: account.balance,
    };
  }

  function getAllAccounts() {
    return accounts;
  }

  function addAccountToBank(account) {
    accounts.push(account);
  }

  return {
    createAccount,
    deposit,
    retrieve,
    getAccountInfo,
    getAllAccounts,
    addAccountToBank, // Adding the function to include account in bank records
  };
}

const bank = createBank();

const johnDoe = new Client("John Doe", 500); // John Doe with pocket money of 500
const janeSmith = new Client("Jane Smith", 1000); // Jane Smith with pocket money of 1000

const account1 = createAccount(johnDoe, "123456", 1000); // Creating an account for John Doe
const account2 = createAccount(johnDoe, "987654", 2000); // Creating another account for John Doe
const account3 = createAccount(janeSmith, "555555", 1500); // Creating an account for Jane Smith

bank.addAccountToBank(account1); // Adding account1 to the bank records
bank.addAccountToBank(account2); // Adding account2 to the bank records
bank.addAccountToBank(account3); // Adding account3 to the bank records

try {
  bank.deposit(account1, 500);
  bank.retrieve(account1, 200); // Retrieving a smaller amount to avoid the error
} catch (error) {
  console.error(error.message);
}

const allAccounts = bank.getAllAccounts();
console.log(allAccounts);
