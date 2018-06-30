function assignJobApplications(tsmCount, availableLocations, minExperience, jobApplications) {

    let index = 1;
    let ans = [];
    let map = new Map();
    availableLocations.map(e => {
        map.set(e, 1);
    })

    jobApplications.map(application => {
        let [username, experience, location] = application.split(" ");

        if (parseInt(experience) >= minExperience && map.get(location)) {
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
        y = p[1] * 1 >= z && m[p[2]] ? i++ : -1
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

    jobApplications.map(application => {
        let [username, experience, location] = application.split(" ");

        if (parseInt(experience) >= minExperience && binarySearch(availableLocations, location)) {
            ans.push(index++);
        } else {
            ans.push(-1);
        }

        if (index > tsmCount) index = 1;
    })

    return ans;

}

function binarySearch(arr, val) {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        let mid = Math.ceil((low + high) / 2);
        if (arr[mid] === val) return true;
        if (arr[mid] < val) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
