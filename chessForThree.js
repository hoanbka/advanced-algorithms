var lines = readline();
var n = Number(lines);

var games = [];
var found = false;

for(var i = 0;i< n;i++){
	games.push(Number(readline));
}

var gameBoard = [1,2];
if(games[0]==3){
	print('NO');
	found = true;
}else if(games[0]==1){
	gameBoard = [1,3];
}else{
	gameBoard = [2,3];
}

for(var i =1;i< n;i++){
	if(gameBoard.indexOf(games[i])==-1){
		print('NO');
		
		found = true;
		break;
	}

	if(games[i]==1){
		if(gameBoard.indexOf(2)!==-1) gameBoard = [1,2];
		else gameBoard = [1,3];
	}else if(games[i]==2){
		if(gameBoard.indexOf(1) !==-1) gameBoard = [2,1];
		else gameBoard = [2,3];
	}else{
		if(gameBoard.indexOf(1)!==-1) gameBoard = [3,1];
		else gameBoard = [3,2];
	}

}
