function day1_NextTime(arr) {
    var h = arr[0];
    var m = arr[1]
    var s = arr[2]

    
    if(s == 59){
        s = 0;
        
        if(m == 59){
            m = 0;
            
            if(h = 23){
                h = 0;
            }else{
                h ++;
            }
        }else{
            m ++;
        }
    }else{
        s ++;
    }
    
    return [h,m,s]
}


console.log(day1_NextTime([23,59,59]));
console.log(day1_NextTime([22,23,59]))
console.log(day1_NextTime([1,58,59]))