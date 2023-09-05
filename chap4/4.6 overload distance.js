function calculateDistance(point1, point2) {
  if (point1.length !== point2.length) {
    throw new Error('Points must have the same dimensions');
  }

  let squaredSum = 0;
  for (let i = 0; i < point1.length; i++) {
    const diff = point2[i] - point1[i];
    squaredSum += diff * diff;
  }

  return Math.sqrt(squaredSum);
}

function distance(...args) {
  if (args.length === 4) {
    const [x1, y1, x2, y2] = args;
    return calculateDistance([x1, y1], [x2, y2]);
  } else if (args.length === 6) {
    const [x1, y1, z1, x2, y2, z2] = args;
    return calculateDistance([x1, y1, z1], [x2, y2, z2]);
  } else if (args.length === 2 && Array.isArray(args[0]) && Array.isArray(args[1])) {
    const [point1, point2] = args;
    return calculateDistance(point1, point2);
  }

  throw new Error('Invalid parameters. Expected either 4 separate values or two arrays of point data.');
}

console.log(distance(1, 2, 2, 2)); 
console.log(distance(1, 2, 1, 2, 2, 4)); // list
console.log(distance([1, 2, 1], [2, 2, 4])); // array
console.log(distance([1, 2], [2, 2])); 
console.log(distance([1, 2], [2, 2, 4])); // Throws an error
