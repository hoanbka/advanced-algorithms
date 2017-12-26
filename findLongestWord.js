var findLongestWord =(str)=>{

	var max = 0,
		temp = 0;

	for(var i=0;i< str.length;i++){

		if(str[i]!==' '){
			temp ++;
		}else{
			max = max < temp ? temp: max;
			temp = 0;
		}
	}

	return max;
}

console.log(findLongestWord("This     is the very first welcome"))