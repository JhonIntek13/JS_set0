function NumberHolder(value) {
  if (typeof value !== 'number') {
    throw new Error('Value must be a number');
  }
  this._value = value;
}

NumberHolder.prototype.setValue = function(value) {
  if (typeof value !== 'number') {
    throw new Error('Value must be a number');
  }
  this._value = value;
};

NumberHolder.prototype.getValue = function() {
  return this._value;
};

var numberHolder = new NumberHolder(42);
console.log(numberHolder.getValue()); 

numberHolder.setValue(100);
console.log(numberHolder.getValue()); 

// Throws an error in all cases
numberHolder.setValue('test');
var badnumberHolder = new NumberHolder('badtoo');
