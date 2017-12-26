// var acmICPC = (arr)=>{

// 	arr.sort(function(a,b){return a-b});
// 	var sum  = arr.reduce(function(a,b){return a+b});

// 	if(arr[0]+arr[arr.length-1] > sum /2) return 'NO';
// 	var temp = arr[0]+arr[arr.length-1];

// 	for(var i=1;i< arr.length-2;i++){
// 		if(arr[i]==(sum/2)-temp) return 'YES';
// 	}

// 	return 'NO';
// }

// var arr = [1,3,2,1,2,1];

var arr  = [71 ,66, 124, 199, 67, 147];

arr.sort(function(a,b){return a-b});

console.log(arr)