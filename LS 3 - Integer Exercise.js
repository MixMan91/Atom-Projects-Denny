function sum_range (x, y){
  let sum = 0;
    for (let i = x; i < y+1; i++) {
      sum = sum + i;

    }

  return sum;
}

let myAnswer = sum_range(1,5);
console.log(myAnswer);


//1+2+3+4+5=
//1+2=3
//3+3=6
//6+4=10
//10+5=15
//Stop
