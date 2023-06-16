function multiplyInBase13(num1, num2) {
  // Convert the numbers to base 10
  const num1_base10 = parseInt(num1, 13);
  const num2_base10 = parseInt(num2, 13);
  
  // Perform the multiplication in base 10
  const result_base10 = num1_base10 * num2_base10;
  
  // Convert the result back to base 13
  let result_base13 = '';
  let quotient = result_base10;
  
  while (quotient > 0) {
    const remainder = quotient % 13;
    result_base13 = remainder.toString(13) + result_base13;
    quotient = Math.floor(quotient / 13);
  }
  
  return result_base13;
}
