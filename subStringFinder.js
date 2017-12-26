
// naive solution : 0(2^n)
function subStringFinder(str, subStr){
 	
 	for(var i  =0;i< str.length;i++){

 		for(var  j = 0;j< subStr.length ; j++){

 			if(str[i+j] != subStr[j]) break;
 		}

 		if(j == subStr.length) return true;
 	}

 	return false;
}

// console.log(subStringFinder('abbcdabbbbbck', 'abb')) //true
// console.log(subStringFinder('ababbcd', 'abb')) //true, special case
// console.log(subStringFinder('hehllo', 'ehll')) // true
console.log(subStringFinder('abbcdabbbbck', 'bbbck')) // true, special case
// console.log(subStringFinder('abbcdabbbbbck', 'bbbck')) // true

console.log(subStringFinder('ababbxxbcd', 'abb')) //TRUE
