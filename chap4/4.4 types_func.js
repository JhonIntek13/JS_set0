function dataType(...args) {
  for (let i = 0; i < args.length; i++) {
    const value = args[i];
    if (typeof value === 'number') {
      if (Number.isInteger(value)) {
        console.log('number');
      } else {
        console.log('float');
      }
    } else if (Array.isArray(value)) {
      console.log('array');
    } else {
      console.log(typeof value);
    }
  }
}

dataType(1, 6.2831, 'pi*2', [function(){}, 1], {}, function () {});
