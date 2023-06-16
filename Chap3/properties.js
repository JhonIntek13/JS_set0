function Image(data, width, height, name) {
  this.data = data;
  this.width = width;
  this.height = height;
  this.name = name;
}

Image.prototype.getPixel = function(x, y) {
  // Calculate the index of the pixel in the data array
  const index = y * this.width + x;

  // Retrieve the color 
  const color = this.data[index];

  return color;
};