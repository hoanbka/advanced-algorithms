 stonesForCrown = s => {

     let map = new Map()
     s.map(e => {
         if (map.has(e)) map.set(e, map.get(e) + 1)
         else map.set(e, 1)
     })

     let values = Array.from(map.values()).sort((a, b) => b - a)
     let tmp
     for (let i = 0; i < values.length - 1; i++) {
         if (values[i] === values[i + 1]) {
             tmp = values[i]
             break
         }
     }

     if (tmp === undefined) return -1
     let max = 0
     s.map(e => {
         if (map.get(e) === tmp) {
             max = Math.max(max, e);
         }
     })

     return max !== 0 ? max : -1
 }