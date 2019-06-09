class myNums{
  constructor(num1, num2, num3, num4,num5,num6){
    this.myNum1=num1;
    this.myNum2=num2;
    this.myNum3=num3;
    this.myNum4=num4;
    this.myNum5=num5;
    this.myNum6=num6;
  }
  sayMyNums(){
    console.log('My first number is ' + this.myNum1 + '.');
    console.log('My first number is ' + this.myNum2 + '.');
    console.log('My first number is ' + this.myNum3 + '.');
    console.log('My first number is ' + this.myNum4 + '.');
    console.log('My first number is ' + this.myNum5 + '.');
    console.log('My first number is ' + this.myNum6 + '.');
  }
}
let someNums = new myNums (1, 2, 3, 4, 5, 6);
let someNewNums = new myNums (2, 4, 6, 8, 10, 12);

console.log('');
console.log('First Set');
someNums.sayMyNums();
console.log('');
console.log('Second Set');
someNewNums.sayMyNums();
