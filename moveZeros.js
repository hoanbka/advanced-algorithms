/*Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].*/
var nums = [1,0,2,3,0,5,6,0,5,5,6,4,0,0,0];

function moveZeroes(arr) {
    var temp = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[temp++] = arr[i];
        }
    }

    for (var j = temp; j < arr.length; j++) {
        arr[j] = 0;
    }

    return arr;
}

function moveZeroes2(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            var temp = nums[j];
            nums[j++] = nums[i];
            nums[i] = temp;
        }
    }
}

function moveZeroesMadeByAlbert(arr) {

    var j = arr.length - 1;
    var i = 0;

    while (i < j) {

        if (arr[i] == 0) {

            if (arr[j] !== 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            } else {
                j--;
            }

        } else {

            i++;
        }

    }
    return arr;
}

function moveZeroesByThangNV(a){
    var index = a.length - 1;

    for (var i = 0; i < index; i++) {
        if(a[index] == 0){
            index = index - 1;
        }

        if(a[i] == 0){
            if(a[index] != 0){
                var temp = a[i];
                a[i] = a[index];
                a[index] = temp;
                index--;
            }else{
                i--;
            }
        }
    }
    return a;
}

//Using Dynamic programming
function toZero(array){

    if(array.length ==1) return array;
    if(array[0]==0) {
        var result = toZero(array.slice(1));
        result.push(0);
        return result;
    }

    return array.slice(0,1).concat(toZero(array.slice(1)));
}

// console.log(moveZeroes(nums));
// console.log(moveZeroesMadeByAlbert(nums));
console.log(moveZeroesByThangNV(nums));
// console.log(toZero(nums));