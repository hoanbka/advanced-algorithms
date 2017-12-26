var myData = ["a", "b", "c", "d", "e", "f", "g"];
 
function swap(input, index_A, index_B) {
    var temp = input[index_A];
 
    input[index_A] = input[index_B];
    input[index_B] = temp;
}

console.log(myData) 
swap(myData, 2, 5);
console.log(myData)