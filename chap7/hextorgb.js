function hexToRgb(hex) {
  // Remove the # symbol if present
  hex = hex.replace("#", "");

  // Split the hex string into three parts: red, green, and blue
  const red = parseInt(hex.substr(0, 2), 16);
  const green = parseInt(hex.substr(2, 2), 16);
  const blue = parseInt(hex.substr(4, 2), 16);

  // Create the RGB format string
  const rgb = `rgb(${red}, ${green}, ${blue})`;

  return rgb;
}

// Usage example:
const hexColor = "#3020ff";
const rgbColor = hexToRgb(hexColor);
console.log(rgbColor); // Output: rgb(48, 32, 255)
