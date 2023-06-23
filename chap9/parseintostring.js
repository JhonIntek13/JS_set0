function dataParse(str) {
  try {
    // Evaluate the string as JavaScript code
    const obj = eval(`(${str})`);
    
    // Check if the evaluated result is an object
    if (typeof obj === "object" && obj !== null) {
      return obj;
    } else {
      throw new Error("Invalid string format. Expected an object literal.");
    }
  } catch (error) {
    console.error("Error parsing string:", error);
    return null;
  }
}

var str = "{prop1: 42, myFn: function(a, b) { return a + b + this.prop1; }}";

var obj = dataParse(str);
console.log(obj.prop1); // Output: 42
console.log(obj.myFn(2, 3)); // Output: 47
