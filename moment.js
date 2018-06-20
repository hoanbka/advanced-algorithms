let moment = require('moment');

var time = moment();
let res = time.format('HHmmss').slice(0, -2) + time.milliseconds();
console.log(time.format('HHmmss'))
console.log(time.milliseconds());

console.log('time = ', time)


function convertTime(time) {
    const d = Date.parse(time);
    const newDate = new Date(d);
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    if (`${date}`.length === 1) {
        date = `0${date}`;
    }
    if (`${month}`.length === 1) {
        month = `0${month}`;
    }
    return [`${date}/${month}/${year}`, `${date}${month}${year}`];
}

console.log(convertTime('2018-03-27T23:14:34.312'))