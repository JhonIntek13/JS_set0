const myMath = {
  add: (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
  },
  
  multiply: (...numbers) => {
    return numbers.reduce((product, num) => product * num, 1);
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