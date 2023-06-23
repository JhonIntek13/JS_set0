function printAttr(el, attributes) {
  for (var i = 0; i < attributes.length; i++) {
    var attr = attributes[i];
    console.log(el.getAttribute(attr));
  }
}

// Usage example
var el = document.getElementById('a');
printAttr(el, ['id', 'class', 'style', 'val']);
