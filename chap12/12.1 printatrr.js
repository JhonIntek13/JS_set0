function printAttr(el, attributes) {
  for (let i = 0; i < attributes.length; i++) {
    let attr = attributes[i];
    console.log(el.getAttribute(attr));
  }
}

let el = document.getElementById('a');
printAttr(el, ['id', 'class', 'style', 'val']);
