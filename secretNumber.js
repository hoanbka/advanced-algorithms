function length(n) {
    let count = 1;
    while (n / 10 << 0 != 0) {
        n = n / 10 << 0;
        count++;
    }
    return count;
}

function return_sum(n) {
    let sum = 0;
    do {
        sum += n % 10;
        n = n / 10 << 0;

    } while (n / 10 << 0 !== 0);
    sum += n;
    return sum;
}

function secretNumber(n, sum, k) {
    let count = 0;
    let i = 10;
    let ans = [];
    do {
        if (length(i) <= n) {
            if (return_sum(i) == sum && length(i) == n) {
                ans.push(i);
                count++;
            }
            i++;
        } else {
            break;
        }

    } while (true);

    console.log('ans = ', ans)
    return ans[k];
}


console.log(secretNumber(3, 12, 15652));

let ans =  [ 129,
  138,
  147,
  156,
  165,
  174,
  183,
  192,
  219,
  228,
  237,
  246,
  255,
  264,
  273,
  282,
  291,
  309,
  318,
  327,
  336,
  345,
  354,
  363,
  372,
  381,
  390,
  408,
  417,
  426,
  435,
  444,
  453,
  462,
  471,
  480,
  507,
  516,
  525,
  534,
  543,
  552,
  561,
  570,
  606,
  615,
  624,
  633,
  642,
  651,
  660,
  705,
  714,
  723,
  732,
  741,
  750,
  804,
  813,
  822,
  831,
  840,
  903,
  912,
  921,
  930 ]

  console.log(ans.length)