//Example 1
//for ( one_number of numbers ) {
  //total += one_number;
//}

//Example 2
//let numbers = [4, 8, 15, 16, 23, 42],
  //  result;

//result = numbers.reduce((total, one_number) => total + one_number,0);

//console.log(result);

//function (a, b) {
  //return a + b
//}

function length(str) {
  return str.length;
}

function max(a, b){
  if ( a > b ) {
      return a;
    } else {
      return b;
    }
  }

let words = [ "Hello", "Cleveland", "it's", "great", "to", "be", "here" ];

let mystery = words.map(length).reduce(max, 0);
