function summerMusicFestival(lineup, friends) {
    let hash = {};

    lineup.map((e, i) => {
        hash[e] = i;
    })

    let nums = [];
    for (let i = 0; i < friends.length; i++) {
        let temp = [];
        for (let j = 0; j < friends[i].length; j++) {
            temp.push(hash[friends[i][j]])
        }

        temp.sort((a, b) => a - b);
        nums.push(temp)
    }

    // console.log(nums)
    let minx = 0,
        miny = Number.MAX_VALUE;
    let next = new Array(nums.length).fill(0);
    let flag = true;
    for (let i = 0; i < nums.length && flag; i++) {
        for (let j = 0; j < nums[i].length && flag; j++) {
            let min_i = 0,
                max_i = 0;
            for (let k = 0; k < nums.length; k++) {
                if (nums[min_i][next[min_i]] > nums[k][next[k]])
                    min_i = k;
                if (nums[max_i][next[max_i]] < nums[k][next[k]])
                    max_i = k;
            }
            if (miny - minx > nums[max_i][next[max_i]] - nums[min_i][next[min_i]]) {
                miny = nums[max_i][next[max_i]];
                minx = nums[min_i][next[min_i]];
            }
            next[min_i]++;
            if (next[min_i] == nums[min_i].length) {
                flag = false;
            }
        }
    }

    return miny - minx + 1;
}