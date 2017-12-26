function sameDigitNumber(n) {
    var temp = n %10;
    n = Math.floor(n/10);
    
    while(n >0){
        if(temp !== n % 10) return false;
        temp = n %10;
        n = Math.floor(n/10);
    }
    return true;
}
