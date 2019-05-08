function encode_me(message){
  let result = "";
  let i;
  let key = 'abcdefghijklmnopqrstuvwxyz';

  for (i = 0; i < message.length; i++){
    console.log(message[i]);
    result += key.indexOf(message[i]) + ' ';
  }
  return result;

}

console.log(encode_me('this is a test'));
