function reverse_string(in_str){
    var reversed = "";
    for (var i = in_str.length - 1; i >= 0;i--){
        reversed += in_str[i];
      }
        return reversed;
}
console.log(reverse_string('dog'));
