function primeBytes(c) {
    var cnt = 0;
    for (var i = 0; i < c.length; i++) {
        
        if(c.charCodeAt(i)>=128 && c.charCodeAt(i) <=2047 ||
        	c.charCodeAt(i)>=2048&&c.charCodeAt(i)<=65535) cnt ++;
    }
    return cnt;
}

function isPrime(n) {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


var str = "Special characters like 'カウント プライム バイト' are allowed.";

 var getStringMemorySize = function( _string ) {
        "use strict";

        var codePoint
            , accum = 0
        ;

        for( var stringIndex = 0, endOfString = _string.length; stringIndex < endOfString; stringIndex++ ) {
            codePoint = _string.charCodeAt( stringIndex );

            if( codePoint < 0x100 ) {
                accum += 1;
                continue;
            }

            if( codePoint < 0x10000 ) {
                accum += 2;
                continue;
            }

            if( codePoint < 0x1000000 ) {
                accum += 3;
            } else {
                accum += 4;
            }
        }

        return accum * 2;
    }
var res = getStringMemorySize(str);
console.log('res = ',res)
dem = 0;
for(var i = 0;i< res.length;i++){
	if(isPrime(res[i])) dem ++;
}
console.log(dem)

getStringMemorySize('カウント')


console.log('カ'.charCodeAt(0))