function Image(data, width, height, name) {
  if (data.length !== width * height) {
    throw new Error('Invalid data array size for the specified width and height.');
  }

  this.data = data;
  this.width = width;
  this.height = height;
  this.name = name;
}

Image.prototype.getPixel = function(x, y) {
  if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
    throw new Error('Pixel coordinates are out of bounds.');
  }

  const index = y * this.width + x;

  const color = this.data[index];

  return color;
};

var data = new Array(1600).fill('white'); // Fill the data array with initial color 'white'
var img = new Image(data, 40, 40, 'myImage');

console.log(img.width); // Output: 40
console.log(img.height); // Output: 40
console.log(img.name); // Output: 'myImage'
console.log(img.getPixel(20, 4)); // Output: 'white' or the assigned color for that pixel
