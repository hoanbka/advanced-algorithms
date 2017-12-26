var lines = readline();
var n = Number(lines);

var games = [];

for(var i = 0;i< n;i++){
	games.push(Number(readline));
}

var gameBoard = [1,2];
if(games[0]==3){
	print('NO');
	return;
}else if(games[0]==1){
	gameBoard = [1,3];
}else{
	gameBoard = [2,3];
}

for(var i =1;i< n;i++){
	if(gameBoard.indexOf(games[i])==-1){
		print('NO');
		return;
	}

	

}
