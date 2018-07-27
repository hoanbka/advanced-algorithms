function cipher26(message) {
	let arr = [...Array(26)].map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

	console.log('arr = ', arr);
	console.log(arr.indexOf('t'));
}

cipher26('taiaiaertkixquxjnfxxdh')