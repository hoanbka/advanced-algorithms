function decipher(cipher) {
    //10197115121
    // because 97 <= lowercase <= 122
    var temp;
    var res = [];
    for(var i = 0;i< cipher.length;){
        if(cipher[i]=='1'){
            temp = cipher.substr(i,3);
            i +=3;
        }else if(cipher[i]=='9'){
            temp = cipher.substr(i,2);
            i +=2;
        }
         res.push(temp)
    }
    
    var out = '';
    for(var i =0;i< res.length;i++) out+= String.fromCharCode(Number(res[i]))
    return out;
    
}

