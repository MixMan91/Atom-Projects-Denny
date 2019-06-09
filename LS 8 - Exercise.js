class Character{
  constructor(name, age, song){
    this.myName=name;
    this.myAge=age;
    this.mySong=song;
  }
  sayMyName(){
    console.log('My name is ' + this.myName + '.');
    console.log('I am ' + this.myAge + ' years old.');
    console.log('And I love the song ' + this.mySong + '.');
  }
  compareAge(){
    if (myCharacter.myAge > anotherCharacter.myAge){
      console.log(myCharacter.myName + ' is older than ' + anotherCharacter.myName + '.');
    }else{
      console.log(myCharacter.myName + ' is younger than ' + anotherCharacter.myName + '.');
    }
  }
}
let myCharacter = new Character ('Yoda', 900, 'Rocketman');
let anotherCharacter = new Character ('Luke', 23, 'We Will Rock You');

myCharacter.sayMyName();
console.log('');
anotherCharacter.sayMyName();
console.log('');
myCharacter.compareAge(anotherCharacter);
