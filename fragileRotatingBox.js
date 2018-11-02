function fragileRotatingBox(boxWeakness, surfaceRoughness) {
    let bottom = boxWeakness[boxWeakness.length-1];
    let right = '', left = '', top = '';
    
    boxWeakness.map(e=>{
        right += e[e.length-1];
    })
    
    right = right.split('').reverse().join('');
    top = boxWeakness[0].split('').reverse().join('');
    boxWeakness.map(e=>{
        left += e[0];
    })
    
    
    let ans = 0;
    let sides = [bottom, right, top, left];
    let index = 0;
    let rotate = '';
    let isGoing = true;
    
    while(isGoing){
        if((rotate + sides[index]).length <= surfaceRoughness.length){
            rotate += sides[index];
        }else{
            for(let i = 0;i< sides[index].length;i++){
                if((rotate + sides[index][i]).length <= surfaceRoughness.length){
                    rotate += sides[index][i];
                }else{
                    isGoing = false;
                    break;
                }
            }
        }
        
        index++;
        if(index == 4) index = 0;
    }
    
    for(let i = 0;i< rotate.length;i++){
        ans += Number(rotate[i]) * Number(surfaceRoughness[i]);
    }
    
    return ans;
}
