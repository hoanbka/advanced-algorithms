// 101 chars
// smallestProduct = (a, [x,y] = a.sort((x, y) => x-y), l = a.length - 1, m = a[0]) => Math.min(m * a[l] * a[l - 1] , m * a[1] * a[2])

smallestProduct = (m, [a, b, c] = m.sort((a, b) => a - b)) =>
    Math.min(a * b * c, a * m.pop() * m.pop())

function smallestProduct(a) {
    a.sort((a, b) => a - b);
    let m = a[0];
    let l = a.length - 1;
    return Math.min(m * a[l] * a[l - 1], m * a[1] * a[2]);
}