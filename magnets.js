// http://codeforces.com/contest/344/problem/A

var magnets = (n, arr) => {
  var temp = arr[0]
  var ans = 0

  for (var i = 1;i < n;i++) {
    if (arr[i][1] == temp[1]) {
      ans++
    }
    temp = arr[i]
  }

  console.log(ans)
  return ans
}

magnets(6, ['10', '10', '10', '01', '10', '10']) // 3
magnets(4, ['01', '01', '10', '10']) // 2
