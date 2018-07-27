function garageSaleMystery(stickers, items) {
    stickers.sort((a, b) => a - b);
    let map = new Map();
    let index = 0;
    let flag = false;

    while (true) {

        for (let i = 0; i < items; i++) {
            if (stickers[index] == undefined) {
                flag = true;
                break;
            }

            if (map.get(i) !== undefined) {
                map.set(i, map.get(i) + '' + stickers[index]);
            } else {
                map.set(i, stickers[index])
            }

            index++;
        }

        if (flag) break;

    }

    return Array.from(map.values()).map(Number).reduce((a, b) => a + b, 0)
}

// cach 2: Using Object as a Map
function garageSaleMystery(stickers, items) {
    stickers.sort((a, b) => a - b);
    let map = {};
    let index = 0;
    let flag = 0;

    while (true) {

        for (let i = 0; i < items; i++) {
            if (stickers[index] == undefined) {
                flag = 1;
                break;
            }

            if (map[i] !== undefined) {
                map[i] = map[i] + '' + stickers[index];
            } else {
                map[i] = stickers[index];
            }

            index++;
        }

        if (flag) break;

    }

    return Object.values(map).map(Number).reduce((a, b) => a + b, 0)
}


stickers = [5, 5, 1, 2, 0, 5, 2, 2, 8, 7, 8, 7, 0, 0, 3, 8, 1, 4, 9, 7, 0, 0, 4, 2, 3, 8, 7, 2, 2, 1, 3, 9, 2, 4, 4, 6, 6, 3, 9, 5, 8, 8, 2, 4, 2, 7, 5, 3, 5, 3, 9, 5]
items = 11

garageSaleMystery(stickers, items)

function garageSaleMystery(stickers, items) {
    stickers.sort();
    var prices = [];
    var i = 0;
    for (var n = 0; n < items; n++) {
        prices.push("")
    }
    for (sticker of stickers) {
        prices[i % items] += "" + sticker;
        i++;
    }
    var total = 0;
    for (price of prices) {
        total += 0 | price;
    }
    return total;
}

function garageSaleMystery(stickers, items) {
    stickers.sort();
    var a = new Array(items).fill("");
    var j = 0;

    for (let i = 0; i < stickers.length; i++) {
        a[j] += stickers[i];
        j++;
        if (j > items - 1) j = 0;
    }

    return a.map(Number).reduce((a, b) => a + b, 0)
}