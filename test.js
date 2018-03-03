/*var open = require('open');
open('http://capnuoctrungan.vn:1234/Khachhang/');*/


var t = {};
t.address = 'hanoi';
t.age = 123;

console.log(t.info == undefined? 'haha': t.info)

console.log(isNaN('123'));
console.log(isNaN('1abc'));


/**
 * { function_description }
 *
 * @param      {<type>}  a       { parameter_description }
 * @param      {<type>}  b       { parameter_description }
 * @return     {<type>}  { description_of_the_return_value }
 */
function add(a,b){
	return a+b;
}