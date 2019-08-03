function mergeTwoSortedArray(arr1, arr2) {
    let ans = [];

    let i = 0,
        j = 0;
    while (true) {
        if (i == arr1.length || j == arr2.length) break;
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else if (arr1[i] == arr2[j]) {
            ans.push(arr1[i]);
            ans.push(arr2[j]);

            i++;
            j++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        while (i < arr1.length) {
            ans.push(arr1[i]);
            i++;
        }
    } else if (j < arr2.length) {
        while (j < arr2.length) {
            ans.push(arr2[j]);
            j++;
        }
    }

    return ans;
}

let arr1 = [1, 2, 3, 6, 8, 18, 20]
let arr2 = [4, 6, 7, 9, 12]

console.log(mergeTwoSortedArray(arr1, arr2));
console.log(mergeTwoSortedArray([3, 6, 8, 9, 12, 56], [-2, -1, 0, 6, 7, 9, 45]));