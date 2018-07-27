const numtoword = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

function numberInWords(number) {
    var result = '';
    if (number > 999) {
        result += numberInWords(Math.floor(number / 1000)) + ' thousand ';
    }
    number %= 1000;
    if (number > 99) {
        result += numtoword[Math.floor(number / 100)] + ' hundred ';
    }

    number %= 100;
    if (number > 19) {
        result += numtoword[Math.floor(number / 10) * 10] + (number % 10 > 0 ? '-' + numtoword[number % 10] : '');
    } else {
        result += numtoword[number];
    }
    return result[0].toUpperCase() + result.slice(1).trim();;
}