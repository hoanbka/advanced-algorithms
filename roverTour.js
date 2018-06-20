// O(n)
function roverTour(terrainDifficulty, energy) {
    let sum = 0;
    let cnt = 0,
        maxcnt = 0;

    for (let i = 0; i < terrainDifficulty.length; i++) {

        // If adding current element doesn't
        // cross limit add it to current window
        if ((sum + terrainDifficulty[i]) <= energy) {
            sum += terrainDifficulty[i];
            cnt++;
        }

        // Else, remove first element of current
        // window.
        else {
            sum = sum - terrainDifficulty[i - cnt] + terrainDifficulty[i];
        }

        // keep track of max length.
        maxcnt = Math.max(cnt, maxcnt);
    }
    return maxcnt;
}

// O(n)
s = j = m = 0
roverTour = (a, e) => a.map((c, i) => {
    j++
    s += s + c > e ? -a[i - --j] + c : c
    m = j > m ? j : m
}) | m

//Binary Search O(n log n)

roverTour = (a, e) => {
    let prefix = [0],
        sum = 0,
        max = 0

    function binarySearch(data, i) {
        let left = 0,
            right = i + 1
        while (left <= right) {
            let middle = (left + right) >> 1
            if (prefix[middle] >= data && prefix[middle - 1] < data) return middle
            prefix[middle] < data ? left = middle + 1 : right = middle - 1
        }
    }
    a.forEach((v, i) => {
        prefix[i + 1] = sum += v
        if (sum <= e) max = i + 1
        else {
            const pos = binarySearch(sum - e, i)
            if (pos !== -1) max = Math.max(max, i - pos + 1)
        }
    })
    return max
}