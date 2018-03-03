

var isAnagram = function (str1, str2){

	if(str1.length !==str2.length){
		return false;
	}

	var res1 = str1.split('').sort();
	var res2 = str2.split('').sort();

	for(var i=0;i<res1.length;i++){
		if(res1[i]!==res2[i]){
			return false;
		}
	}

	return true;

}

var isAnagramUsingMap = function(str1, str2){
	var map = new Map();
	
	if(str1.length !==str2.length){
		return false;
	}

	var len = str1.length;

	for(var i=0;i< len ;i++){
		if(map.has(str1.charAt(i))){
			map.set(str1.charAt(i),map.get(str1.charAt(i))+1);
		}else{
			map.set(str1.charAt(i),1);
		}
	}

	for(var j=0;j<len;j++){

		if(!map.has(str2.charAt(j))){
			return false;
		}
		map.set(str2.charAt(j),map.get(str2.charAt(j))-1);

		if(map.get(str2.charAt(j))<0){
			return false;
		}
	}
	return true;
}

var isAnagramUsingString = function(str1, str2){
	return str1.split('').sort().join('')==str2.split('').sort().join('');

}

console.log(isAnagram('hello','llohe'));
console.log(isAnagram('hello','hella'));
console.log(isAnagramUsingMap('hello','llohe'));

