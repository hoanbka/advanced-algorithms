function wordBoggle(board, words) {
    
    //Direction vectors
    const vectors = [
        [-1,-1],[-1,0],[-1,1],
        [ 0,-1],/*  */ [ 0,1],
        [ 1,-1],[1, 0],[ 1,1]  
    ];
    
    function search(board,y,x,word,idx) {
        //If idx is over the last character, we have found a solution
        if(idx==word.length) {
            return true;
        }
        
        //Check an each (existing) cell, around the current one
        for(let vector of vectors) {
            let [vy,vx] = [y+vector[0],x+vector[1]];
            if(board[vy]) {
                if(board[vy][vx]) {
                    if(board[vy][vx]==word[idx]) {
                        
                        //Strike-out the current cell, so that it won't be reused
                        let backup=board[y][x];
                        board[y][x]=null;
                        
                        //Lookup the next character
                        let found = search(board,vy,vx,word,idx+1);
                        
                        //Back-track
                        board[y][x]=backup;
                        
                        //Stop if we have found the whole word
                        if(found) return true;
                    }
                }
            }                
        }        
    }
    
    //Iterate over an each board cell, for an each word,
    //check if a full word can be tracked from there.
    let results = {};
    for(let word of words) {
        for(let y=0; y<board.length;y++) {
            for(let x=0; x<board[0].length;x++) {
                  if(board[y][x]==word[0] && search(board,y,x,word,1)) {
                      results[word]=1;
                  }
            }
        }        
    }
    
    //Return unique, sorted results
    return Object.keys(results).sort();
}