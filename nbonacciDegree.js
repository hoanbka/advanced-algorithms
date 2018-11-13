function nbonacciDegree(sequence) {
    let sum = sequence[0];
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] == sum) {
            let j = i;
            let s = sum;

            while (j < sequence.length - 1) {
                s = s - sequence[j - i];
                s += sequence[j];

                if (s !== sequence[j + 1]) break;
                j++;
            }

            if (j == sequence.length - 1) {
                return i;
            }
           
        }
        
        sum += sequence[i];
    }

    return -1;

}

function nbonacciDegree(e){let n=e[0];for(let t=1;t<e.length;t++){if(e[t]==n){let r=t,l=n;for(;r<e.length-1&&(l-=e[r-t],(l+=e[r])===e[r+1]);)r++;if(r==e.length-1)return t}n+=e[t]}return-1}

sequence = [1, 2, 3, 6, 11]
console.log(nbonacciDegree(sequence));