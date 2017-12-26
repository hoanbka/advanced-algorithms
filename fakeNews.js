var fakeNews = (str) => {
    var fake = 'heidi';
    var index = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == fake[index]) index++;
        if (index == fake.length) return 'YES';
    }
    return 'NO';
}

console.log(fakeNews('abcheaibcdi')); //YES
console.log(fakeNews('hiedi')); //NO

