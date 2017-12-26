var buildMaxNumber=(n)=>{

    if(n ==1) return 9;

    let output = 0;
    n--;

    while(n>=0){
        output += 9*Math.pow(10,n--);
    }

    return output;
}

console.log(buildMaxNumber(3));