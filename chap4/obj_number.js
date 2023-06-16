function NumberHolder(value) {
  if (typeof value !== 'number') {
    throw new Error('Value must be a number');
  }
  this.value = value;
}