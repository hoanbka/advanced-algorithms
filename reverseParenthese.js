function reverseParentheses(s){

	if(s.includes('(')){
		return reverseParentheses(reverseRecur(s));
	}
	return s;
}

function reverseRecur(s){

	var regexp = /\(([^()]*)\)/i;
	var subStr = regexp.exec(s)[1];
	subStr = subStr.split('').reverse().join('');
	return s.replace(regexp,subStr);
}

//test

var s = 'abc(de)s';
var s1 = 'co(de(fight)s)';
console.log(reverseParentheses(s));
console.log(reverseParentheses(s1));