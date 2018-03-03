/*(Sum the digits in an integer using recursion) Write a recursive method that
computes the sum of the digits in an integer. Use the following method header:
public static int sumDigits(long n)
For example, sumDigits(234) returns 2 + 3 + 4 = 9. Write a test program
that prompts the user to enter an integer and displays its sum.*/

var num = 123456;

function sumOfDigits(num){
	var sum =0;

	while(num>0){
		sum+=num%10;
		num=Math.floor(num/10);
	}
	return sum;
}

//
var total = 0;
function sumOfDigitsUsingRecursion(num){
	if(num==0){
		return total;
	}

	total += num%10;
	return sumOfDigitsUsingRecursion(Math.floor(num/10));
}


console.log(sumOfDigits(num));
console.log(sumOfDigitsUsingRecursion(num));