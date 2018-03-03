/**
 * Created by Hoan Nguyen on 12/25/2017.
 */

//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function largestValuesInTreeRows(t) {
	var result = [],
		nextRow = t ? [ t ] : [];
	while (nextRow.length !== 0) {
		var row = nextRow;
		nextRow = [];
		var max = -Infinity;
		row.forEach(node => {
			if (node.value > max) max = node.value;
			if (node.left) nextRow.push(node.left);
			if (node.right) nextRow.push(node.right);
		});
		result.push(max);
	}
	return result;
}



var t = {
		"value": -1,
		"left": {
			"value": 5,
			"left": null,
			"right": null
		},
		"right": {
			"value": 7,
			"left": null,
			"right": {
				"value": 1,
				"left": null,
				"right": null
			}
		}
	};

console.log(largestValuesInTreeRows((t)));

// solution 2

function largestValuesInTreeRows2(t) {
	var stack = [],
		results = [];

	stack.push(t);

	if (!t) return [];

	while (stack.length != 0) {
		var max = -Infinity;
		var children = [];
		for (var i of stack) {
			if (i) {
				max = Math.max(max, i.value);
				if (i.left) children.push(i.left);
				if (i.right) children.push(i.right);
			}
		}

		results.push(max);
		stack = children.slice();
	}

	return results;
}

console.log(largestValuesInTreeRows2((t)));


//solution 3

var applyOp = {
	'+': function (x, y) { return x + y },
	'-': function (x, y) { return x - y },
	'*': function (x, y) { return x * y },
	'/': function (x, y) { return x / y },
};
function hasGreaterPrecedence(op1, op2){
	if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-'))
		return true;
	else if ((op1 == '+' || op1 == '-') && (op2 == '+' || op2 == '-'))
		return true;
	else if ((op1 == '*' || op1 == '/') && (op2 == '*' || op2 == '/'))
		return true;
	else
		return false;
}
function evaluate(expr){
	var values = [];
	var ops = [];
	for (var i=0; i<expr.length; i++){
		if (expr[i] == ' '){
			continue;
		}
		else if (expr[i] >= '0' && expr[i] <= '9'){
			var num = expr[i++];
			while (expr[i] >= '0' && expr[i] <= '9'){
				num += expr[i]
				i++;
			}
			i--;
			values.push(parseInt(num));
		}
		else if (expr[i] == '('){
			ops.push(expr[i]);
		}
		else if (expr[i] == ')'){
			while (ops.length >= 1 && ops[ops.length-1] != '('){
				var b = values.pop();
				var a = values.pop();
				values.push(applyOp[ops.pop()](a, b));
			}
			ops.pop();
		}
		else if (applyOp.hasOwnProperty(expr[i])){
			while (ops.length >= 1 && hasGreaterPrecedence(ops[ops.length-1], expr[i])){
				var b = values.pop();
				var a = values.pop();
				values.push(applyOp[ops.pop()](a, b));
			}
			ops.push(expr[i]);
		}
	}
	while (ops.length >= 1){
		var b = values.pop();
		var a = values.pop();
		values.push(applyOp[ops.pop()](a, b));
	}
	var k = values.pop();
	return k;
}

function arithmeticPredicate(predicate) {
	var exprs = predicate.split("=");
	if (exprs.length != 2){
		return false;
	}
	try {
		return Math.round(evaluate(exprs[0]) * 10000000)/10000000 == Math.round(evaluate(exprs[1]) * 10000000)/10000000 ;
	}catch (e) {
		return False;
	}

}
