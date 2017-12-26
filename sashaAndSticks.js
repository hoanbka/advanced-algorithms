var sashaAndSticks = (n,k)=>{
	var games = Math.floor(n/k);
	if(games % 2 !==0){
		return 'YES'
	}else{
		return 'NO'
	}

}

console.log(sashaAndSticks(1,1)) //YES
console.log(sashaAndSticks(4,1)) // NO
console.log(sashaAndSticks(4,3)) // YES
console.log(sashaAndSticks(10,4))// NO
console.log(sashaAndSticks(7,3)) // NO
console.log(sashaAndSticks(251656215122324104,164397544865601257)) //YES
