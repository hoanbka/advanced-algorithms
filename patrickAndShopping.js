var patrickAndShopping = (d1,d2,d3)=>{
	var min1 =  Math.min(d1+d2+d3,2*(d1+d2));
	var min2 = Math.min(2*(d1+d3),2*(d2+d3));
	return Math.min(min1,min2);
}

console.log(patrickAndShopping(10,20,30));
console.log(patrickAndShopping(1,1,5));