function IsaacRule(steps, number) {

    if (steps == 0 && number == 1) return 1;
    if (steps == 0 && number !== 1) return 0;
    let count = 0;
    let arr = [number];

    // 3*x + 1 = number => x = (number-1)/3;
    // 2*x = number => x = number/2
    let temp = [];
    while (count < steps) {

        temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[0] <= 0) continue;
            let value = (arr[i] - 1);

            if ((value / 3) === number || arr[i] * 2 == number) {
                continue;
            } else {
                temp.push(arr[i] * 2);
                if (((arr[i] - 1) / 3) % 1 === 0 && ((arr[i] - 1) / 3) % 2 !== 0) {
                    temp.push((arr[i] - 1) / 3);
                }
            }
        }
        arr = temp;
        count++;
    }

    return temp.length;

}

IsaacRule  = (steps, number, count = 0, arr = [number], t = []) => {

    // 3*x + 1 = number => x = (number-1)/3;
    // 2*x = number => x = number/2

    while (count < steps) {
        t = [];
        for (i in arr) {
            t.push(arr[i] * 2);
            let a = (arr[i] - 4) % 6,
                b = (arr[i] - 1) / 3;
            if (a == 0 && b != 1)
                t.push(b);
        }
        arr = t;
        count++;
    }

    return arr.length;

}