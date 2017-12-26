var input = readline().split('');
var nums = [];

for(var i = 0;i < input.length;i++){
	if(i%2 ===0) nums.push(Number(input[i]));
}

nums.sort(function(a,b){return a-b});
var output = ''+ nums[0];

for(var i = 1;i< nums.length;i++){
	output += '+'+ nums[i];
}

print(output)