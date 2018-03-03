function hazardousAsteroids(startDate, endDate) {
    var key = "GHqxUMJpKsD6E7Qnfa1k0y1ddooZffZRlsz5oV1J";
    var nasa = JSON.parse(require('child_process')
        .execSync(`curl --silent "https://api.nasa.gov/neo/rest/v1/feed?` +
            `&start_date=` + startDate +
            `&end_date=` +
            endDate + `&api_key=GHqxUMJpKsD6E7Qnfa1k0y1ddooZffZRlsz5oV1J"`));

    var map = new Map();
    for (var key in nasa.near_earth_objects) {
        // console.log(nasa.near_earth_objects[key]);
        // console.log(`=========================================================
        // 	=======================================
        // 	==========================`)

        helper(nasa.near_earth_objects[key], map);
        // console.log(map)
    }
    var ans = solve(map);


    console.log('map = ', map);

    // console.log(nasa.near_earth_objects)
    return ans == undefined ? "-1" : ans;


}

function helper(arr, map) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].is_potentially_hazardous_asteroid == false) continue;
        console.log(arr[i].close_approach_data)
        if (map.has(arr[i].name)) {
            map.set(arr[i].name, map.get(arr[i].name) + 1);
        } else {
            map.set(arr[i].name, 1);
        }
    }
    return map;
}

function solve(map) {
    var keys = Array.from(map.keys());
    // console.log(keys);
    var max = 1;
    var ans = keys[0];
    for (var i = 0; i < keys.length; i++) {
        if (map[keys] > max) ans = keys[i]
    }
    console.log(ans);
    return ans;
}
// hazardousAsteroids("2012-12-21", "2012-12-22")
hazardousAsteroids("2017-12-30", "2018-01-06")
// hazardousAsteroids("2020-08-18","2020-08-18")


// "(2007 BJ29)"
// Expected Output:
// "(2011 KW15)"
// Console Output:
// (2007 BJ29)
// map =  Map {
//   '(2007 BJ29)' => 1,
//   '(2011 KW15)' => 1,
//   '471323 (2011 KW15)' => 1,
//   '(2012 YO3)' => 1,
//   '(2016 PZ39)' => 1 }