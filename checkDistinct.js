/*Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.*/
var arr = [1, 2, 4, 5, 6, 7, 3, 3, 2, 1];

function checkDistinct(arr) {
 var map = [];

 for(var i=0;i<arr.length;i++){

    if(map.indexOf(arr[i])>0){
        return true;
    }

    map.push(arr[i]);
 }
 return false;
}

console.log(checkDistinct(arr));