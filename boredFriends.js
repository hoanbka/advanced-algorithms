function boredFriends(n) {
    let check = false;
    let times = 0;
    let number = Number(n);

    while (n > 0) {
        times++;
        if (n - 8 <= 0) {
            if (times % 2 !== 0) return true;
            else return false;
        } else {

        }
    }
}

boredFriends("5");