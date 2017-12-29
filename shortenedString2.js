function shortenedString(ss) {
    let longstring = "";
    
    for(let i = ss.length - 1; i >= 0; i--) {
        let char = ss[i];
        
        if(/\d/.test(char)) {
            let num = parseInt(char);
            let power = 10;
            
            while(/\d/.test(ss[i - 1])) {
                i--;
                num = num + power * parseInt(ss[i]);
                power *= 10;
            }
            
            let prevChar = ss[i - 1];
            
            if(prevChar === ")") {
                let level = 1;
                
                for(let j = i - 2; j >= 0; j--) {
                    let startChar = ss[j];
                    
                    if(startChar === ")") level++;
                    if(startChar === "(") level--;
                    
                    if(level === 0) {
                        ss = ss.slice(0, j) + ss.slice(j + 1, i - 1).repeat(num);
                        i = ss.length;
                        break;
                    }
                }
                
            } else {
                longstring = prevChar.repeat(num) + longstring;
                i--;
            }
        } else if(/\S/.test(char)) {
            longstring = char + longstring;
        }
    }
    
    return longstring;
}
