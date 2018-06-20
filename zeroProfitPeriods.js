// function zeroProfitPeriods(transactions) {
//     let count = 0;
//     let sum = 0;
//     let first = transactions[0];
//     let index = 0;

//     for (let i = 0; i < transactions.length; i++) {
//         if (transactions[i] === 0) {
//             count++;
//             sum = 0;
//             first = transactions[i + 1];
//             index = i + 1;
//             continue;
//         }

//         sum += transactions[i];
//         if (sum === 0) {
//             count++;
//             first = transactions[i + 1];
//             index = i + 1;
//             continue;
//         }
//         let temp = sum;
//         let tmpIndex = index;
//         let found = false;

//         if (sum !== transactions[i]) {
//             if (sum - first === 0) {
//                 count++;
//                 sum = 0;
//                 first = transactions[i + 1];
//                 index = i + 1;
//             } else {
//                 while (index < i) {
//                     sum -= transactions[index];
//                     index++;

//                     if (sum === 0) {
//                         count++;
//                         index = i + 1;
//                         found = true;
//                         break;
//                     }
//                 }

//                 if (!found) {
//                     sum = temp;
//                     index = tmpIndex;
//                 }
//             }
//         }
//     }
//     return count;
// }

// function zeroProfitPeriods(trans) {
//     //Holds our count
//     let count = 0;
//     //Hold rolling sum
//     let sum = 0;
//     //Hold all previous rolling sums
//     let hash = {};
//     //Set 0 as starting point in hash
//     hash[0] = 1;


//     for (e of trans) {
//         //Add to our sum
//         sum += e;

//         //Check if this sum is in the hash
//         if (hash[sum]) {
//             //If this sum was previously in the hash increase count
//             count++;
//             //Clear the hash and set the current sum as new starting value
//             hash = {};
//             hash[sum] = 1;
//         } else {
//             //If sum wasn't in hash add it to the hash
//             hash[sum] = 1;
//         }

//     }
//     return count;
// }

function zeroProfitPeriods(transactions) {
    let count = 0;
    let sum = 0;
    let map = {};
    map[0] = 1;
    for (let i = 0; i < transactions.length; i++) {
        sum += transactions[i];
        if (map[sum]) {
            count++;
            map = {};
            map[sum] = 1;
        } else map[sum] = 1;
    }
    return count;
}

// cach 3

// s = r = 0
// h = new Set([0])
// zeroProfitPeriods = a => a.map(e => {
//     if (h.has(s += e)) {
//         r++
//         h.clear()
//     }
//     h.add(s)
// }) | r

let transactions = [2, -1, 1, -1, 1, -1, -1]
console.log(zeroProfitPeriods(transactions));