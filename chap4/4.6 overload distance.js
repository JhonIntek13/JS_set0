function distance(...args) {
    if (args.length === 4) {
      const [x1, y1, x2, y2] = args;
      const diffX = x2 - x1;
      const diffY = y2 - y1;
      return Math.sqrt(diffX * diffX + diffY * diffY);
    } else if (args.length === 6) {
      const [x1, y1, z1, x2, y2, z2] = args;
      const diffX = x2 - x1;
      const diffY = y2 - y1;
      const diffZ = z2 - z1;
      return Math.sqrt(diffX * diffX + diffY * diffY + diffZ * diffZ);
    } else if (args.length === 2 && Array.isArray(args[0]) && Array.isArray(args[1])) {
      const [point1, point2] = args;
      if (point1.length === 2 && point2.length === 2) {
        const [x1, y1] = point1;
        const [x2, y2] = point2;
        const diffX = x2 - x1;
        const diffY = y2 - y1;
        return Math.sqrt(diffX * diffX + diffY * diffY);
      } else if (point1.length === 3 && point2.length === 3) {
        const [x1, y1, z1] = point1;
        const [x2, y2, z2] = point2;
        const diffX = x2 - x1;
        const diffY = y2 - y1;
        const diffZ = z2 - z1;
        return Math.sqrt(diffX * diffX + diffY * diffY + diffZ * diffZ);
      }
    }
  
    throw new Error('Invalid parameters. Expected either 4 separate values or two arrays of point data.');
  }
  
  console.log(distance(1, 2, 2, 2)); 
  console.log(distance(1, 2, 1, 2, 2, 4)); // list
  console.log(distance([1, 2, 1], [2, 2, 4])); // array
  console.log(distance([1, 2], [2, 2])); 
  console.log(distance([1, 2], [2, 2, 4])); // Throws an error
  