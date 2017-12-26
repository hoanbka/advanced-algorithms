function telephoneGame(messages) {
    for(var i = 1;i< messages.length;i++){
        if(messages[i]!= messages[i-1]) return i;
    }

    return -1;
}


var messages  = ["CodeFights rocks!",
"CodeFights rocks!", 
"CodeFights folks!",
"Code Fights folks!",
"Code bites folks!"];

console.log(telephoneGame(messages))