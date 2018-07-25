//https://app.codesignal.com/challenge/DfQ3jYW9sKJj6r4Pv

const first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
]
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

numberInWords = n => {
    if (n <= 20) return first[n][0].toUpperCase() + first[n].substr(1)

    arr = chunk(n)
    if (arr.length == 1) return read(n)[0].toUpperCase() + read(n).substr(1)
    else {
        a1 = read(arr[0])
        a2 = read(arr[1])

        return arr[1] !== 0 ? (a1 + ' thousand ' + a2)[0].toUpperCase() + (a1 + ' thousand ' + a2).substr(1) :
            (a1 + ' thousand')[0].toUpperCase() + (a1 + ' thousand').substr(1)
    }
}

read = n => {
    if (n <= 20) return first[n]
    else if (n < 100) return n % 10 == 0 ? tens[~~(n / 10)] : tens[~~(n / 10)] + '-' + first[n % 10];

    if (n % 100 == 0) {
        return first[~~(n / 100)] + ' hundred'
    } else {
        a = ~~(n / 100)
        b = (~~(n / 10)) % 10
        c = n % 100 % 10

        return b == 0 ? first[a] + ' hundred ' + first[c] :
            (n % 100) > 20 ? c !== 0 ? first[a] + ' hundred ' + tens[b] + '-' + first[c] : first[a] + ' hundred ' + tens[b] :
            first[a] + ' hundred ' + first[n % 100]
    }

}

chunk = n => {
    a = []
    while (n > 0) {
        a.push(n % 1000)
        n = ~~(n / 1000)
    }

    return a.reverse()
}

/*
// Test
299 => "Two hundred ninety-nine"
123456 => "One hundred twenty-three thousand four hundred fifty-six"
600700 => "Six hundred thousand seven hundred"

*/
