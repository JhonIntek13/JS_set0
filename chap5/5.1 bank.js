function createBank() {
  const clients = [];

  function createClient(clientName) {
    const accounts = [];

    function createAccount(accountNumber, initialBalance) {
      let balance = initialBalance;

      function getAccountBalance() {
        return balance;
      }

      function deposit(amount) {
        if (amount > 0) {
          balance += amount;
          console.log("Deposit successful!");
        } else {
          throw new Error("Invalid deposit amount!");
        }
      }

      function retrieve(amount) {
        if (amount > 0 && amount <= balance) {
          balance -= amount;
          console.log("Money retrieved successfully!");
        } else {
          throw new Error("Insufficient balance or invalid retrieval amount!");
        }
      }

      function getAccountInfo() {
        return {
          accountNumber,
          balance: getAccountBalance(),
        };
      }

      const account = {
        deposit,
        retrieve,
        getAccountInfo,
      };

      accounts.push(account);
      return account;
    }

    function getAllAccounts() {
      return accounts;
    }

    const client = {
      clientName,
      createAccount,
      getAllAccounts,
    };

    clients.push(client);
    return client;
  }

  function getAllClients() {
    return clients;
  }

  return {
    createClient,
    getAllClients,
  };
}

const bank = createBank();

const client1 = bank.createClient("John Doe");
const account1 = client1.createAccount("123456", 1000);
const account2 = client1.createAccount("987654", 500);

const client2 = bank.createClient("Jane Smith");
const account3 = client2.createAccount("555555", 2000);

const account1Info = account1.getAccountInfo();
console.log(account1Info);

try {
  account1.deposit(500);
  account1.retrieve(20000);
} catch (error) {
  console.error(error.message);
}

const allClients = bank.getAllClients();
console.log(allClients);
