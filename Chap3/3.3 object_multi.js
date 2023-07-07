const myMath = {
  add: (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
  },
  
  multiply: (...numbers) => {
    if (numbers.length === 0) {
      return 0;
    }
    return numbers.reduce((product, num) => product * num);
  },

  
  factorial: (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }
};

console.log(myMath.add(2,3,4));
console.log(myMath.multiply());
console.log(myMath.factorial(3));


