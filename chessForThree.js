/* http://codeforces.com/problemset/problem/893/A */

var chessForThree = module.exports = (n, arr) => {

  var candidate = [1, 2]

  if (arr[0] == 1) {
    candidate = [1, 3]
  }else if (arr[0] == 2) {
    candidate = [2, 3]
  }else {
    return 'NO'
  }

  for (var i = 1; i < n; i++) {
    if (candidate.indexOf(arr[i]) == -1) {
      return 'NO'
    }
    candidate = arr[i] == 1 ? candidate.indexOf(2) == -1 ? [1, 2] : [1, 3] : arr[i] == 2
      ? candidate.indexOf(3) == -1 ? [2, 3] : [2, 1] :
      candidate.indexOf(1) == -1 ? [3, 1] : [3, 2]
  }
  return 'YES'
}

console.log(chessForThree(3, [1, 1, 2])) // YES
console.log(chessForThree(2, [1, 2])) // NO
console.log(chessForThree(3, [3, 1, 2])) // NO
