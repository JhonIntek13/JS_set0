function multiplyInBase13(num1, num2) {


  // Perform the multiplication in base 10 without convert to base 10 they are already in this
  const result_base10 = num1 * num2;

  // Convert the result to base 13
  const result_base13 = result_base10.toString(13);

  return result_base13;
}

console.log(multiplyInBase13(9,6));