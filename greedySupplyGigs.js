function greedySupplyGigs(offers) {
    let reject = {};
    let accept = {};
    let sum = 0;

    var doReject = x => {
        if (reject[x]) reject[x] += 1
        else reject[x] = 1
    }

    var doAccept = x => {
        if (accept[x]) accept[x] += 1
        else accept[x] = 1
    }

    let first = helper(offers[0]).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    for (let i = 0; i < offers.length; i++) {

        if (offers[i].length == 0) continue;
        let temp = helper(offers[i]);

        temp.sort((a, b) => b[0] - a[0] || a[1] - b[1])
        let isFoundMax = false;
        while (temp.length) {

            let t = temp.shift();
            if (!isFoundMax) {
                // accepted/2 >= rejected
                if (reject[t[2]] == undefined || accept[t[2]] >= 2 * reject[t[2]]) {
                    isFoundMax = true;
                    doAccept(t[2]);
                    sum += t[0]
                } else {
                    doReject(t[2])
                }
            } else {
                //reject
                doReject(t[2])
            }
        }
    }

    return sum;
}

function helper(arr) {
    let offers = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split(' $');
        offers.push([Number(temp[1]), i, temp[0]])
    }

    return offers
}