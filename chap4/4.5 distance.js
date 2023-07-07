function distance(...points) {
  if (points.length !== 4 && points.length !== 6) {
    throw new Error('Invalid number of parameters. Expected 4 or 6 points.');
  }

  let sum = 0;
  if (points.length === 4) {
    const diffX = points[2] - points[0];
    const diffY = points[3] - points[1];
    sum = diffX * diffX + diffY * diffY; // the square of the dif 
  } else if (points.length === 6) {
    const diffX1 = points[3] - points[0];
    const diffY1 = points[4] - points[1];
    const diffZ1 = points[5] - points[2];
    sum = diffX1 * diffX1 + diffY1 * diffY1 + diffZ1 * diffZ1;
  }

  return Math.sqrt(sum);
}

var x1 = 1, y1 = 2;
var x2 = 2, y2 = 2;
var delta1 = distance(x1, y1, x2, y2); 
console.log(delta1);

var x3 = 1, y3 = 2, z3 = 1;
var x4 = 2, y4 = 2, z4 = 4;

var delta2 = distance(x3, y3, z3, x4, y4, z4); 
console.log(delta2);
// Error in the input
var x5 = 1, y5 = 2, z5 = 1, a1 = 1;
var x6 = 2, y6 = 2, z6 = 4, b1 = 1;
var deltabad = distance(x5, y5, z5, a1, x6, y6, z6, b1);
