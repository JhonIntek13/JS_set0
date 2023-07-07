function dataParse(str) {
  const obj = eval(`(${str})`);

  if (typeof obj === "object" && obj !== null) {
    return obj;
  } else {
    throw new Error("Invalid string format. Expected an object literal.");
  }
}

var str = "{prop1: 42, myFn: function(a, b) { return a + b + this.prop1; }}";

var obj = dataParse(str);
console.log(obj.prop1); // Output: 42
console.log(obj.myFn(2, 3)); // Output: 47
