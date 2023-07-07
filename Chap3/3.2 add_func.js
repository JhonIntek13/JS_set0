function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

var answer = add(1, 2) + add(1, 4, 6, 7, 2);
console.log(answer);  // Output: 23