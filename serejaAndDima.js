var n = parseInt(readline());
var cards = readline().split(' ').map(Number);


var sum_sereja = 0,
	sum_dima = 0;
var score;

var left =0, right = n - 1;

for(var i = 0;i< n;i++){

	if(cards[left]> cards[right]){
		score = cards[left];
		left ++;
	}else{
		score = cards[right];
		right --;
	}

	if(i%2==0) sum_sereja += score;
	else sum_dima +=score;
}


print(sum_sereja, sum_dima);