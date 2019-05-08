function repeat_word(word, times){
    let result = "";
    for (let i=0; i < times; i++){
        result += word + ' ';
    }
    return result;
}

console.log(repeat_word('Banana', 3));
