var localExtrema = (n, arr)=>{

	var cnt  = 0;
	for (var i = 1; i < n -1; i++) {
		if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) 
			|| (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) cnt++;
	}

	console.log(cnt)
}

localExtrema(4,[1,5,2,5])


