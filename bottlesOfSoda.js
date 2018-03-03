function bottlesOfSoda(n, m, k) {

	return solve(n,1,m,k);
}

function solve(n,c,m,k){

	var money = n;
	var bottles = 0;
	bottles += Math.floor(money/c);
	var wrappers = Math.floor(money/c)+m;

	while(wrappers >= k){
		var currentChocolates = Math.floor(wrappers/k);
		bottles += currentChocolates;
		wrappers = currentChocolates + wrappers%k;
	}
	console.log(bottles);
	return bottles;

}