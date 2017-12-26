function delay(t) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, t)
    });
}
function logHi() {
    console.log('hi');
}
delay(2000).then(logHi);