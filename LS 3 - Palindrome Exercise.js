function palindrom (in_str){
    var reversed = "";
    for (var i = in_str.length - 1; i >= 0;i--){
        reversed += in_str[i];
        console.log(i);
    }

    if (reversed === in_str) {
        console.log('It is a palindrom');
        } else {
        console.log('It is not a palindrom');
        }
        return reversed;
  }
console.log(palindrom('abba'));
