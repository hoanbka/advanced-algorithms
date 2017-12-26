var applyOp = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
}

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
        
        return evaluate(exprs[0]).toFixed(20) == evaluate(exprs[1]).toFixed(20)
    }catch (e) {
        return False;
    }
    
}


console.log(arithmeticPredicate("1 * 2 * 3 * 4 * 5 * 0 * 6 * 7 * 8 * 9 * ( 9 - 8 ) = 0 * 2"));
console.log(arithmeticPredicate("( 1 + ( 3 * ( 8 / 2 ) / 6 ) ) + 0 - 1 = 2"))
console.log(arithmeticPredicate("12*(1+2)= (2*13)+(2*5)"))
console.log(evaluate("123*(1+2)"))