function zeroProfitPeriods(transactions) {
    let count = 0;
    let sum = 0;
    let first = transactions[0];
    let index = 0;

    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i] === 0) {
            count++;
            sum = 0;
            first = transactions[i + 1];
            index = i + 1;
            continue;
        }

        sum += transactions[i];
        if (sum === 0) {
            count++;
            first = transactions[i + 1];
            index = i + 1;
            continue;
        }
        let temp = sum;
        let tmpIndex = index;
        let found = false;

        if (sum !== transactions[i]) {
            if (sum - first === 0) {
                count++;
                sum = 0;
                first = transactions[i + 1];
                index = i + 1;
            } else {
                while (index < i) {
                    sum -= transactions[index];
                    index++;

                    if (sum === 0) {
                        count++;
                        index = i + 1;
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    sum = temp;
                    index = tmpIndex;
                }
            }
        }
    }
    return count;
}
