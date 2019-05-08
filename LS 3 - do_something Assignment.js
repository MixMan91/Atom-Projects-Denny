function do_something(in_string){
    var a = 0;
    var b = "";
    for (a = 0; a < in_string.length; a++){
      if (in_string[a]==" "||in_string[a]==","||in_string[a]=="."||in_string[a]=="?"){
        return b;
        }

      b = b + in_string[a];

    }
}
console.log(do_something('too long'));
