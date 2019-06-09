class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  isEqual (other_circle){
    return this.radiu === other_circle._radius;
  }
}
  diameter() {
    return this._radius * 2;

  area() {
    return Math.PI * this._radius * this._radius;
  }

  perimeter() {
    return Math.PI * this.diameter();
  }
}
let cir_1 = new Circle(4),
    cir_2 = new Circle(3),
    cir_3 = new Circle(4);

let fails = 0;
if ( cir_1.isEqual(cir_2) ) {
  fails++;
}
if (! cir_1.diameter() !== 8 ) {
  fails++;
}

console.log(`${fails} tests failed.`);
