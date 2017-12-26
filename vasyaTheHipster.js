var vasyaTheHipster = (a,b)=>{
	var min = 101;
	var max  = 0;

	min  = a< b? a:b;
	max = a > b? a:b;

	console.log(min + " "+ Math.floor((max-min)/2));
}

vasyaTheHipster(7,3)