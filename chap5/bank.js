function createBank() {
  const clients = [];

  function createClient(accountNumber, initialBalance) {
    let balance = initialBalance;

    function getClientBalance() {
      return balance;
    }

    function deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log("Deposit successful!");
      } else {
        console.log("Invalid deposit amount!");
      }
    }

    function retrieve(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log("Money retrieved successfully!");
      } else {
        console.log("Insufficient balance or invalid retrieval amount!");
      }
    }

    function getClientInfo() {
      return {
        accountNumber,
        balance: getClientBalance(),
      };
    }

    return {
      deposit,
      retrieve,
      getClientInfo,
    };
  }

  function addClient(client) {
    clients.push(client);
    console.log("Client added successfully!");
  }

  function getClient(accountNumber) {
    const client = clients.find((client) => client.getClientInfo().accountNumber === accountNumber);
    if (client) {
      return client;
    } else {
      console.log("Client not found!");
    }
  }

  return {
    createClient,
    addClient,
    getClient,
  };
}

// Usage Example:

const bank = createBank();

const client1 = bank.createClient("123456", 1000);
bank.addClient(client1);

const client2 = bank.createClient("987654", 500);
bank.addClient(client2);

const client1Info = client1.getClientInfo();
console.log(client1Info); // { accountNumber: '123456', balance: 1000 }

client1.deposit(500); // Deposit successful!
client1.retrieve(200);
