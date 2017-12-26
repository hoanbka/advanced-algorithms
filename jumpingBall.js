var jumpingBall = (n,s)=>{
	var move = '>';
	var back = '<';
	var solution = 0;
	var i = 0;

	while(i < n && s[i] == back){
		solution ++;
		i ++;
	}

	i = n-1;
	while (i > -1 && s[i] == move){
		solution ++;
		 i --;
	}

	console.log(solution)
	return solution;
}

jumpingBall(5,'>>>>>') //5
jumpingBall(4,'>><<') //0
jumpingBall(4,'<<><') //2
jumpingBall(4,'><<<') //0