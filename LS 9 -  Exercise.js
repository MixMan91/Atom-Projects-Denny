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
class CharDiff extends Character{
  constructor(name, age, song, color, spell, specialty){
    super(name, age, song);
    this._myColor = color;
    this._mySpell = spell;
    this._mySpecialty = specialty;
  }
  sayMyName(){
    console.log('My name is ' + this.myName + '.');
    console.log('I am ' + this.myAge + ' years old.');
    console.log('And I love the song ' + this.mySong + '.');

    if(this._myColor){
      console.log('I have a magic pointy hat that is ' + theWizard._myColor +'.');
    }else{
      console.log('I dont wear a hat thank you very much!');
    }
    if(this._mySpell){
      console.log('Yes, I can perform spells!');
    }else{
      console.log('ummmmm....no, I am a '+ this.myName + '.' + ' I do not cast spells!');
    }
    if(this._mySpecialty){
      console.log('My speciality is using a ' + this._mySpecialty + '.');
    }
  }
}
let theWizard = new CharDiff ('The Wizard', 900, 'This Magic Moment', 'blue', true, 'casting spells');
let theBard = new CharDiff ('The Bard', 44, 'A Bards Tale', false, false,'mandelon');
let theThief = new CharDiff ('The Thief', 32, 'Bad Guy', false, false, 'key picking kit');
let theWarrior = new CharDiff ('The Warrior', 28, 'Another One Bites The Dust', false, false, 'Broad Sword');

theWizard.sayMyName();
console.log('');
theBard.sayMyName();
console.log('');
theThief.sayMyName();
console.log('');
theWarrior.sayMyName();
console.log('');
theWizard.compareAge(theBard);
