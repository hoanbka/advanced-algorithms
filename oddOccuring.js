var findOddOccuring = function (arr){
	var xor =0;
	for(var i=0;i<arr.length;i++){
		xor = xor ^ arr[i];
	}
	return xor;
}



var arr = [1,2,3,1,3,3,1];
console.log(findOddOccuring(arr));
