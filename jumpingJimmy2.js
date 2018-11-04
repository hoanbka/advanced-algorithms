function jumpingJimmy2(tower, power, poison, jumpHeight) {
    let totalHeight = 0;
    let tmp = 0;

    for (let i = 0; i < tower.length; i++) {
        if (tmp + tower[i] >= jumpHeight) {

            if (tmp + tower[i] == jumpHeight) {
                totalHeight += tower[i];
                tmp = 0;

                if (power.indexOf(i) !== -1) jumpHeight += 1
                else if (poison.indexOf(i) !== -1) jumpHeight -= 1

            } else {
                if (power.indexOf(i - 1) !== -1) jumpHeight += 1
                else if (poison.indexOf(i - 1) !== -1) jumpHeight -= 1


                tmp = tower[i];
                if (tmp > jumpHeight) break;

                totalHeight += tower[i];
            }

        } else {
            tmp += tower[i];
            totalHeight += tower[i];
        }

    }

    return totalHeight;
}