var print = function (str){

	/*if(str.length ==0){
		return;
		
	}*/

	console.log(str.charAt(str.length-1));
	//return print(str.substring(0,str.length-1));

	return str.length == 0? 0: print(str.substring(0,str.length-1));
}

var printUsingSlice = function(str){
	if(str.length == 0){
		return;
	}

	console.log(str.charAt(0));
	return printUsingSlice(str.slice(1));
}

print("hello");
console.log("//////////");
printUsingSlice("hello");