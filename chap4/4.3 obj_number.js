function NumberHolder(value) {
  if (typeof value !== 'number') {
    throw new Error('Value must be a number');
  }

  // Use a closure to store the value
  let _value = value;

  // Define a getter for the value property
  Object.defineProperty(this, 'value', {
    get: function() {
      return _value;
    },
    set: function(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('Value must be a number');
      }
      _value = newValue;
    }
  });
}

// Usage
var numberHolder = new NumberHolder(42);
console.log(numberHolder.value); // Output: 42

numberHolder.value = 100;
console.log(numberHolder.value); // Output: 100

// Throws an error when trying to set a non-number value
numberHolder.value = 'test';
