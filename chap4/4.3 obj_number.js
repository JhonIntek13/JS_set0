function NumberHolder(value) {
  if (typeof value !== 'number') {
    throw new Error('Value must be a number');
  }

  // Use of a closure to encapsulate the _value property
  let _value = value;

  this.getValue = function() {
    return _value;
  };

  // Define a setter 
  this.setValue = function(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('Value must be a number');
    }
    _value = newValue;
  };
}

// Usage
var numberHolder = new NumberHolder(42);
console.log(numberHolder.getValue()); // Output: 42

numberHolder.setValue(100);
console.log(numberHolder.getValue()); // Output: 100

// Throws an error when trying to set a non-number value
numberHolder.setValue('test');
