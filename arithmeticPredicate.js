var arithmeticPredicate = (expression)=>{
	var stack = [];

	expression = expression.split(' ').join('');
	for(var i = 0;i< expression.length;i++){
		var e = expression[i];

		if(e !==')') stack.push(e);
		else {
			var b = stack.pop();
			var op = stack.pop();
			var a = stack.pop();
			stack.pop()

			var temp = helper(a,b,op);
			console.log('temp = ',temp)
			stack.push(temp);
		}
	}
	console.log('stack = ',stack);

	if(stack.length == 3) {
		var b = stack.pop();
		var op = stack.pop();
		var a = stack.pop();
		return helper(a,b,op);
	}
}

var helper =(a,b,op)=>{
	if(op == '+') return Number(a)+ Number(b);
	else if(op == '-') return Number(a)- Number(b);
	else if( op =='*') return Number(a)* Number(b);
	else {
		if(b ==0) throw new Error('can not divide to zero');
		else return  Number(a) / Number(b);
	}
}


var expression = '( 3 * ( 7 - 1 ) - 6 ) / 3';
console.log(arithmeticPredicate(expression))