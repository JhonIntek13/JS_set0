function hexToRgb(hex) {
  // Remove the # symbol
  hex = hex.replace("#", "");

  // Use of regular expression
  const regex = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const matches = hex.match(regex);

  if (!matches) {
    throw new Error("Invalid hex color format");
  }

  // Parse the hexadecimal values and convert to decimal
  const red = parseInt(matches[1], 16);
  const green = parseInt(matches[2], 16);
  const blue = parseInt(matches[3], 16);

  // Create the RGB format string
  const rgb = `rgb(${red}, ${green}, ${blue})`;

  return rgb;
}

const hexColor = "#3020ff";
const rgbColor = hexToRgb(hexColor);
console.log(rgbColor); 
