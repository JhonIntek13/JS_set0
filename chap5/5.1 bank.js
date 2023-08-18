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


const client1 = createClient("123456", 1000);
const client2 = createClient("987654", 500);

const client1Info = client1.getClientInfo();
console.log(client1Info);

try {
  client1.deposit(500); 
  client1.retrieve(20000);
} catch (error) {
  console.error(error.message);
}


