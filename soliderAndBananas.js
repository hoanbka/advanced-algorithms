var soliderAndBananas =  (k,n,w)=>{
	var money = 0;

	for(var i=1;i<=w;i++){
		money += k*i;
	}

	if(money > n){
		return money - n;
	}else{
		return 0;
	}
}

console.log(soliderAndBananas(3,17,4))
 