function power(number, exponent) {
  let result = number;

  for ( let counter = 2; counter <= exponent ; counter++ ) {
    result = result * number;
  }

  return result;
}

let pow_2_3 = power (2,3);

console.log("2 to the thrid power is: " + pow_2_3);
