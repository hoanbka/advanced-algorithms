var gradingHomework =(question)=> {
	var correctAns = 0;

	for(var i = 0;i< question.length;i++){
		var out = stringHandler(question[i][0]);
		if(out.length == 2) out.push(0);
		console.log('out = ',out);

		if(out[0]-out[2]== out[1]*Number(question[i][1])) correctAns++;
	}
	return ((correctAns*100/question.length)).toFixed(3);
};

var stringHandler = (str)=>{
	var arr = str.split(' ').join('').split('');
	var temp = '';
	var output = [];

	for(var i= 0;i< arr.length;i++){
		if(!isNaN(arr[i])) temp += arr[i];
		else{
			if(arr[i]=='-') temp += '-';
			else {
				if(temp!=='-' && temp !==''){
					output.push(Number(temp));
					temp = '';
				}else if(temp =='-'){
					output.push(-1);
					temp = '';
				}
			}
		}
	}

	if(temp) output.push(Number(temp));
	return output;
}
var question =  [["20=0x+20","2"]];
// console.log(stringHandler('44=-10x+94'))
console.log(gradingHomework(question));

