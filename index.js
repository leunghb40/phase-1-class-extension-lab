class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
    get countSides() {
      return this.sides.length;
    }
    get perimeter() {
      return this.sides.reduce((acc, val) => acc + val, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      const [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      return this.sides.every(side => side === this.sides[0]);
    }
    get area() {
      return this.sides[0] ** 2;
    }
  }