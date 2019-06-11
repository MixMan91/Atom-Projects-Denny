function find_largest(shapes) {
  let largest = shapes[0];

  for ( let shape of shapes ) {
    if ( largest.area() < shape.area() ) {
      largest = shape;
    }
  }

  return largest;
}
