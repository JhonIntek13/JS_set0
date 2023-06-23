var myLib = {
    math: {
      real: {
        add: function(a, b) { /* code goes here */ },
        sub: function(a, b) { /* code goes here */ },
        mul: function(a, b) { /* code goes here */ }
      },
      complex: {
        Num: function(real, img) { /* code goes here */ },
        add: function(a, b) { /* code goes here */ },
        sub: function(a, b) { /* code goes here */ },
        mul: function(a, b) { /* code goes here */ }
      },
      matrix: {
        add: function(a, b) { /* matrix addition */ },
        sub: function(a, b) { /* matrix subtraction */ },
        mul: function(a, b) { /* matrix multiplication */ },
        eye: function(size) { /* identity matrix */ },
        dot: function(m, a) { /* dot product */ },
        times: function(a, b) { /* element-wise multiplication */ }
      }
    }
  };
  
  // Simplified function calls using the with statement
  with (myLib.math.real) {
    var answer = sub(add(20, 22), mul(2, 5));
  }
  
  with (myLib.math) {
    with (matrix) {
      with (complex) {
        var ans = times(eye(4), sub(new Num(add(5, 2), -3), new Num(3, 4)));
      }
    }
  }
  
  console.log(answer);
  console.log(ans);
  