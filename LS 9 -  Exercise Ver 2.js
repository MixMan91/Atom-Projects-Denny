class Character{
  constructor(name, age, song){
    this.myName=name;
    this.myAge=age;
    this.mySong=song;
  }
  compareAge(){
    if (theWizard.myAge > theBard.myAge){
      console.log(theWizard.myName + ' is older than ' + theBard.myName + '.');
    }else{
      console.log(theWizard.myName + ' is younger than ' + theBard.myName + '.');
    }
  }
}
class Wizard extends Character{
  constructor(name, age, song, color, specialty, spell){
    super(name, age, song);
    this._myHatColor = color;
    this._SpellCaster = specialty;
    this._mySpell = spell;
  }
  sayMyName(){
    console.log('My name is ' + this.myName + '.');
    console.log('I am ' + this.myAge + ' years old.');
    console.log('And I love the song ' + this.mySong + '.');
  }
  castSpell(){
    console.log(this.myName + ' is a ' + this._SpellCaster +  ' and casts a ' + this._mySpell + '.');
  }
}
class Bard extends Character{
  constructor(name, age, song, specialty){
    super(name, age, song);
    this._mySpecialty = specialty;
  }
  sayMyName(){
    console.log('My name is ' + this.myName + '.');
    console.log('I am ' + this.myAge + ' years old.');
    console.log('And I love the song ' + this.mySong + '.');
  }
  playSong(){
    console.log(this.myName + ' plays the song "Born This Way" on his ' + this._mySpecialty + '.');
  }
}
class Thief extends Character{
  constructor(name, age, song, specialty){
    super(name, age, song);
    this._mySpecialty = specialty;
  }
  sayMyName(){
    console.log('My name is ' + this.myName + '.');
    console.log('I am ' + this.myAge + ' years old.');
    console.log('And I love the song ' + this.mySong + '.');
  }
}
class Warrior extends Character{
  constructor(name, age, song, specialty){
    super(name, age, song);
    this._mySpecialty = specialty;
  }
  sayMyName(){
    console.log('My name is ' + this.myName + '.');
    console.log('I am ' + this.myAge + ' years old.');
    console.log('And I love the song ' + this.mySong + '.');
  }
}
let theWizard = new Wizard ('The Wizard', 900, 'This Magic Moment', 'blue', 'spell caster', 'spell');
let theBard = new Bard ('The Bard', 44, 'A Bards Tale','mandelon');
let theThief = new Thief ('The Thief', 32, 'Bad Guy', 'key picking kit');
let theWarrior = new Warrior ('The Warrior', 28, 'Another One Bites The Dust', 'Broad Sword');

theWizard.sayMyName();
console.log('');
theWizard.castSpell();
console.log('');
theBard.sayMyName();
console.log('');
theBard.playSong();
console.log('');
theThief.sayMyName();
console.log('');
theWarrior.sayMyName();
console.log('');
theWizard.compareAge(theBard);
