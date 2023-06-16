function distance(...points) {
  if (points.length < 4) {
    throw new Error('Insufficient parameters');
  }

  let sum = 0;
  for (let i = 0; i < points.length; i += 2) {
    const diff = points[i + 2] - points[i];
    sum += diff * diff;
  }

  return Math.sqrt(sum);
}