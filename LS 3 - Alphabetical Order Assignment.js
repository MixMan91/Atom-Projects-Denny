function is_alpha(myWord){
  var counter = 0;

  for (counter = 0; counter < myWord.length - 1; counter++){
    console.log('letter ' + counter + ' is ' + myWord[counter]);
    console.log('next letter ' + (counter+1) + ' is ' + myWord[counter+1]);
    if(myWord[counter] < myWord[counter + 1]){
      console.log('It is in alphabetical order.');
    } else {
      console.log(myWord + " " + 'in not in aplphabetical order.');
    }
  }

}

is_alpha('abcd');
