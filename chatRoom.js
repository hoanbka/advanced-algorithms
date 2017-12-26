var chatRoom =(s)=>{
	var standard = 'hello';
	var idx = 0;
	var len = s.length;

	for(var i=0;i < len;i++){

		if(s[i] == standard[idx]) idx ++;
		// else {
		// 	if(s[i] == standard[idx -1]) continue;
		// 	else idx = 0;
		// }

		if(idx == standard.length) return 'YES';
	}

	return 'NO';
}

console.log(chatRoom('ahhellllloou'));// YES
console.log(chatRoom('hlelo')) //NO

console.log(chatRoom('ahhellaallloou'))//NO