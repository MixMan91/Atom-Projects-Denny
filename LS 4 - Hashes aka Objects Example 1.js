let person = {
  name: 'Alice',
  age: 25
};

person.species = 'human';
person["planet of origin"] = "Earth";
person[5] = "numbers are fine to use as keys as well!";

console.log(
  person.name + ", the " + person.species +
  " from " + person["planet of origin"] + ", is " + person.age
);
