
function assignJobApplications(tsmCount, availableLocations, minExperience, jobApplications) {

    let index = 1;
    let ans = [];
    let map = new Map();
    availableLocations.map(e => {
        map.set(e, 1);
    })

    jobApplications.map(e => {
        let tmp = e.split(' ');

        if (parseInt(tmp[1]) >= minExperience && map.get(tmp[2])) {
            ans.push(index++);
        } else {
            ans.push(-1);
        }

        if (index > tsmCount) index = 1;
    })

    return ans;

}




//short version

assignJobApplications = (t, l, z, j) => {

    i = 1
    a = []
    m = {}
    l.map(e => m[e] = 1)
        
    j.map(e => {
        p = e.split(' ')
        y = p[1]*1 >= z && m[p[2]] ? i++: -1
        a.push(y)

        i = i > t ? 1 : i
    })
    return a
}



//Using binary search
function assignJobApplications(tsmCount, availableLocations, minExperience, jobApplications) {

    let index = 1;
    let ans = [];

    // in order to apply binary search, array should be sorted first
    availableLocations.sort();

    jobApplications.map(e => {
        let tmp = e.split(' ');

        if (parseInt(tmp[1]) >= minExperience && binarySearch(availableLocations, tmp[2])) {
            ans.push(index++);
        } else {
            ans.push(-1);
        }

        if (index > tsmCount) index = 1;
    })

    return ans;

}

function binarySearch(arr, val) {
    var lo = 0,
        hi = arr.length - 1;
    while (lo <= hi) {
        var mid = Math.ceil((lo + hi) / 2);
        if (arr[mid] === val) return true;
        if (arr[mid] < val) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return false;
}