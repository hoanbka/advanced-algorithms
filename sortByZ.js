var SortByZ = (g, z)=> {
    
    var map = new Map();
    for(var i = 0;i< g.length;i++){
        map.set(g[i],i);
    }
    var temp;
    for(var  i = 0;i< g.length - 1;i++){
        for(var j = i+1;j< g.length;j++){
            temp = compare(g[i].substr(z-1).toLowerCase(),g[j].substr(z-1).toLowerCase());
            if(temp == 1) swap(g,i,j);
            else if(temp == 0){
                if(map.get(g[i]) > map.get(g[j])){
                        swap(g,i,j)
                }
            }
        }
    }
    return g;
}

var compare =(s1,s2)=> {
    return s1[0] < s2[0] ? -1 : s1 [0] > s2[0]? 1 : 0;
}

var  swap = (input, i, j)=> {
    var temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}