var a = [0,-9,9];
var array = a.sort(function(a, b){return b-a});

function totalZero(arr, number) {
	if(arr.length==1) {
		return arr[0]+number==0?1:0;
	}

	if(arr[0]+number==0) return 1;
	return totalZero(arr.slice(1),number)+totalZero(arr.slice(1), number+arr[0]);

}
console.log(totalZero(array,0));
