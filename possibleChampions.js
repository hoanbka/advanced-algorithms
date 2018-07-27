 function possibleChampions(b, c, e, f) {
     if (b == f || c == e) return [];

     if (Math.abs(b - f) == 1) return Math.abs(c - e) == 1 ? [] : [c > e ? "Croatia" : "England"]
     if (Math.abs(c - e) == 1) return Math.abs(b - f) == 1 ? [] : [b > f ? "Belgium" : "France"]

     return [b > f ? "Belgium" : "France", c > e ? "Croatia" : "England"].sort()
 }

 possibleChampions = (b, c, e, f) => {
     x = Math.abs(b - f)
     y = Math.abs(c - e)

     return b == f || c == e ? [] : x == 1 ? y == 1 ? [] : [c > e ? `Croatia` : `England`] :
         y == 1 ? x == 1 ? [] : [b > f ? `Belgium` : `France`] : [b > f ? `Belgium` : `France`, c > e ? `Croatia` : `England`].sort()
 }

 possibleChampions = (b, c, e, f) => {
     x = Math.abs(b - f) == 1
     y = Math.abs(c - e) == 1
     t = c > e ? `Croatia` : `England`
     z = b > f ? `Belgium` : `France`

     return b == f || c == e ? [] : x ? y ? [] : [t] :
         y ? x ? [] : [z] : [z, t].sort()
 }

 possibleChampions = (b, c, e, f) => {
     x = b - f == 1 || b - f == -1
     y = c - e == 1 || c - e == -1
     t = c > e ? `Croatia` : `England`
     z = b > f ? `Belgium` : `France`

     return b == f || c == e || x && y ? [] : x ? [t] :
         y ? [z] : [z, t].sort()
 }

 possibleChampions = (b, c, e, f) => {
     x = (b - f) ** 2 == 1
     y = (c - e) ** 2 == 1
     t = c > e ? `Croatia` : `England`
     z = b > f ? `Belgium` : `France`

     return b == f || c == e || x && y ? [] : x ? [t] :
         y ? [z] : [z, t].sort()
 }