function middleName(firstName, lastName, para) {
    var lLen = lastName.length,
        fLen = firstName.length,
        pLen = para.length,
        f = c => c < 'A' || c > 'Z',
        arr = [],
        iSub,
        i, j, s, sub;
    for (i = 0; i < pLen - fLen - lLen; i++) {
        s = para.substr(i, fLen);
        if (s !== firstName) {
            continue;
        }

        iSub = i + fLen;

        if ((para[iSub] === ' ' && f(para[iSub + 1])) || (para[iSub] !== ' ' && f(para[iSub]))) {
            continue;
        }

        if (para[iSub] === ' ') {
            iSub++;
        }
        sub = para[iSub];
        j = iSub + 1;
        next = false;
        while ((j < pLen - lLen) && (para[j] >= 'a') && (para[j] <= 'z')) {
            s = para.substr(j, lLen);
            if (s === lastName) {
                arr.push(sub);
                if (fLen !== 0) i += fLen - 1;
                next = true;
                break;
            }
            sub += para[j++];

        }
        if (next) {
            continue;
        }
        if ((para[j] === ' ') && (lastName[0] !== ' ')) {
            j++;
        }
        s = para.substr(j, lLen);

        if (s === lastName) {
            arr.push(sub);
            if (fLen !== 0) i += fLen - 1;
        }
    }
    return arr;
}