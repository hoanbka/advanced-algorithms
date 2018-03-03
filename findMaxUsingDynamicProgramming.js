var arr = [1,2,6,4,8,9,12,0];
var max = -9999;
function findMaxUsingDP(arr){

	if(max < arr[0]){
		max = arr[0];
	}

	if(arr.length ==1){
		return max;
	}
	return findMaxUsingDP(arr.slice(1));
}

console.log(findMaxUsingDP(arr));

////

function reverseString(str){

	if(str.length ==1){
		return str;
	}

	return reverseString(str.slice(1))+str[0];
}
console.log(reverseString('hello'));