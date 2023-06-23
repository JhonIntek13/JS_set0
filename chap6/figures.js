// Shape object type
function Shape(pEdges) {
  this.pEdges = pEdges;
}

Shape.prototype.fnDisplay = function () {
  console.log(`Shape with ${this.pEdges} edges`);
};

// Quadrilateral object type inheriting from Shape
function Quadrilateral(pEdges) {
  Shape.call(this, pEdges);
}

Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

Quadrilateral.prototype.fnArea = function () {
  console.log("Calculating area of Quadrilateral...");
};

Quadrilateral.prototype.fnPerimeter = function () {
  console.log("Calculating perimeter of Quadrilateral...");
};

// Square object type inheriting from Quadrilateral
function Square() {
  Quadrilateral.call(this, 4);
}

Square.prototype = Object.create(Quadrilateral.prototype);
Square.prototype.constructor = Square;

// Triangle object type inheriting from Shape
function Triangle(pEdges) {
  Shape.call(this, pEdges);
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.fnArea = function () {
  console.log("Calculating area of Triangle...");
};

Triangle.prototype.fnPerimeter = function () {
  console.log("Calculating perimeter of Triangle...");
};

// Usage Example:

const square = new Square();
square.fnDisplay(); // Output: Shape with 4 edges
square.fnArea(); // Output: Calculating area of Quadrilateral...
square.fnPerimeter(); // Output: Calculating perimeter of Quadrilateral...

const triangle = new Triangle(3);
triangle.fnDisplay(); // Output: Shape with 3 edges
triangle.fnArea(); // Output: Calculating area of Triangle...
triangle.fnPerimeter(); // Output: Calculating perimeter of Triangle...
