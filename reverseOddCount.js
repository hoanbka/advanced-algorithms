 /*
  *Reverse the order of all characters in a string that occur an odd amount of times (spaces included). 
  *All other characters should remain in the same position; only odd-frequency characters are eligible to swap with each other.
  Case-sensitivity is important, so for example "a" is considered different than "A" when counting character frequencies

*/


 reverseOddCount = s => {
     let map = {},
         arr = s.split(``)
     arr.map(e => {
         if (map[e]) map[e] += 1
         else map[e] = 1
     })

     let j = s.length - 1,
         i = 0

     while (i < j) {
         if (map[arr[i]] % 2 !== 0) {
             if (map[arr[j]] % 2 !== 0) {
                 [arr[i], arr[j]] = [arr[j], arr[i]]

                 i++
                 j--
             } else {
                 j--;
             }
         } else {
             i++;
         }
     }

     return arr.join('')
 }