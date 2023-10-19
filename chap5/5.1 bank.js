function createBank() {
  const clients = [];

  function createClient(clientName, initialBalance) {
    const client = {
      clientName,
      balance: initialBalance,
    };

    clients.push(client);
    return client;
  }

  function createAccount(client, accountNumber) {
    if (client.balance <= 0) {
      throw new Error("Client has no initial balance to create an account.");
    }

    const account = {
      client,
      accountNumber,
      balance: client.balance,
    };

    return account;
  }

  function deposit(account, amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount!");
    }

    account.balance += amount;
    console.log("Deposit successful!");
  }

  function retrieve(account, amount) {
    if (amount <= 0 || amount > account.balance) {
      throw new Error("Insufficient balance or invalid retrieval amount!");
    }

    account.balance -= amount;
    console.log("Money retrieved successfully!");
  }

  function getAccountInfo(account) {
    return {
      accountNumber: account.accountNumber,
      balance: account.balance,
    };
  }

  function getAllClients() {
    return clients;
  }

  return {
    createClient,
    createAccount,
    deposit,
    retrieve,
    getAccountInfo,
    getAllClients,
  };
}

const bank = createBank();

const client1 = bank.createClient("John Doe", 1000);
const account1 = bank.createAccount(client1, "123456");
const account2 = bank.createAccount(client1, "987654");

const client2 = bank.createClient("Jane Smith", 2000);
const account3 = bank.createAccount(client2, "555555");

const account1Info = bank.getAccountInfo(account1);
console.log(account1Info);

try {
  bank.deposit(account1, 500);
  bank.retrieve(account1, 20000);
} catch (error) {
  console.error(error.message);
}

const allClients = bank.getAllClients();
console.log(allClients);
