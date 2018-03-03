var arr = [-1,100,-111,-2,4,0,9,-12,100,7,8];

var findMaxSumOfSubArray = function (array){
	var max = array[0];
	var temp = array[0];

	for (var i = 1; i < array.length; ++i) {
		temp = Math.max(temp + array[i], array[i]);
		max = Math.max(max, temp);
	}
	return max;
}

function greedySolution(array) {
	var sum = 0, min = 0, res = array[0];
	var len = array.length;
	for (var i = 0; i < len; i++) {
		sum += array[i];
		if (sum - min > res) res = sum - min;
		if (sum < min) min = sum;
	}
	return res;
}

function maxSubArray(array) {
	var len = array.length;
	var dp = [];//dp[i] means the maximum subarray ending with array[i];
	dp[0] = array[0];
	var max = dp[0];

	for (var i = 1; i < len; i++) {
		dp[i] = array[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
		max = Math.max(max, dp[i]);
	}

	return max;
}

var findMax = function (array){
	if(array.length==1) return array;
	var resul1 = findMax(array.slice(1));
	var total1 =resul1.reduce((a, b) => a + b);

	var max2 = array[0];
	var total =array[0];
	var j=0;
	for(var i=1; i<array.length;i++){
		total+=array[i];
		if(total>max2){
			j=i;
			max2 =total;
		}
	}

	if(max2<total1){
		return resul1;
	} else {
		return array.slice(0,j);
	}
}



console.log([4,0,9,-12,100,7,8].reduce((a, b) => a + b));
console.log(findMax(arr));
console.log(greedySolution(arr))