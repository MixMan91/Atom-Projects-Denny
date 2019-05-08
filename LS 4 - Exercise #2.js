let arr = ['b','a','g','p','f'];

let sorted = arr.sort(function(a, b) {
  if ( a < 0 ) a = -a;
  if ( b < 0 ) b = -b;
  if ( a > b ) return -1;
  return 1;
});

console.log(sorted);
