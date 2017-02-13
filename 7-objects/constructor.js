// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle
function RightTriangle(side1, side2, base) { 
  this.one = side1;
  this.two = side2;
  this.three = base;
  this.area = function() {
    return (side1 * base)/2;
  }
  this.perimeter = function() {
    return (side1 + side2 + base);
  }

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
function RightTriangle(side1, side2, base) {
RightTriangle.side1 = 6;
RightTraingle.side2 = 4;
RightTriangle.base = 8;
  console.log(RightTriangle);
}
