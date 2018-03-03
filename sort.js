var arr = [0,1,2,0,4,5];
function moveZeroes_3(nums) {
    var x = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[x++] = nums[i];
        }
    }
    for (var i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

function moveZeroes_4(nums) {

    var zeroCount = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            zeroCount++;
        } else if (zeroCount > 0) {
            nums[i - zeroCount] = nums[i];
            nums[i] = 0;
        }
    }

    return nums;
}

var nums = moveZeroes_3(arr);

nums.forEach(function(el){
	console.log(el);
})