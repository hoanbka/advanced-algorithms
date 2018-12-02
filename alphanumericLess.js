function alphanumericLess(s1, s2) {

    if (s1 == s2) return false;

    let arr1 = splitTokens(s1);
    let arr2 = splitTokens(s2);

    let isMoreLeadingZeros = false;
    let maxLen = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLen; i++) {
        if (arr1[i] == undefined) return true;
        if (arr2[i] == undefined) return false;

        if (!isNaN(arr1[i])) {
            if (isNaN(arr2[i])) return true;
            else {
                if (compare(arr1[i], arr2[i]) == 1) {
                    return true;
                } else if (compare(arr1[i], arr2[i]) == -1) return false;
                else {

                    if (arr1[i].length >= arr2[i].length) isMoreLeadingZeros = true;
                    continue;
                }
            }
        } else {
            if (!isNaN(arr2[i])) return false;
            else {
                if (arr1[i] == arr2[i]) continue;
                if (arr1[i] < arr2[i]) return true;
                else if (arr1[i] > arr2[i]) return false;
            }
        }
    }


    return isMoreLeadingZeros ? true : false;
}

function splitTokens(str) {
    let ans = [],
        tmp = '';

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {

            if (!isNaN(tmp)) {
                tmp != '' && ans.push(tmp);
                ans.push(str[i]);
                tmp = '';
            }
        } else {
            if (!isNaN(tmp)) {
                tmp += str[i];
            } else {
                tmp != '' && ans.push(tmp);
                tmp = str[i];
            }
        }
    }
    if (tmp != '') ans.push(tmp);
    return ans;
}

function compare(s1, s2) {
    num1 = removeLeadingZeros(s1);
    num2 = removeLeadingZeros(s2);

    if (num1.length < num2.length) return 1;
    if (num1.length > num2.length) return -1;

    for (let i = 0; i < num1.length; i++) {
        if (num1[i] < num2[i]) return 1;
        if (num1[i] > num2[i]) return -1;
    }

    return 0;
}


function removeLeadingZeros(s) {
    return s.replace(/^0+/, '');
}