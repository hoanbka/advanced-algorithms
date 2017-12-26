var wayTooLongWords = (n, arr)=>{
	for(var i=0;i<n;i++){
		if(arr[i].length >10){
			var mid = arr[i].length -2;
			var res = arr[i][0]+ mid + arr[i][arr[i].length-1];
			console.log(res)
		}else{
			console.log(arr[i])
		}
	}

}

wayTooLongWords(4,['word','localization','internationalization','pneumonoultramicroscopicsilicovolcanoconiosis'])