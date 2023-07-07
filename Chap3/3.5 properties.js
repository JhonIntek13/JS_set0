function printObjProp(obj, instanceOnly = false) {
  if (instanceOnly) {
    console.log(Object.keys(obj));
  } else {
    console.log(Object.keys(obj).concat(Object.keys(obj.__proto__)));
  }
}

function CustomObject(a, b) {
  this.a = a;
  this.b = b;
}
CustomObject.prototype.c = function() {
  return this.a + this.b;
};

var obj = new CustomObject(1, 2);
printObjProp(obj);           // Output: a, b, c
printObjProp(obj, false);    // Output: a, b, c
printObjProp(obj, true);     // Output: a, b
