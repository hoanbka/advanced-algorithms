function sleddingHills(enjoyability, maxRuns) {
    let total = 0;
    
    // sort array
    enjoyability = enjoyability.sort((a,b)=> a-b);
    
    while (maxRuns > 0) {
        let max = enjoyability[enjoyability.length-1];
        
        if (max <= 0) break;
        total += max;
        
        // remove last one
        enjoyability.pop();
        
        let position = binarySearchPosition(enjoyability, max - 1);
        
        // insert element (max-1) into sorted enjoyability
        if(position == -1){
            enjoyability.push(max - 1);
        }else enjoyability.splice(position, 0, max - 1);
        
        maxRuns--;
    }

    return total;
}

// find the first element greater than target in a sorted array
function binarySearchPosition(arr, target){
    let start = 0, end = arr.length-1;
    let ans = -1;
    
    while(start <= end){
        let mid =  Math.floor((start + end)/2);
        
        if(arr[mid] <= target){
            start = mid + 1;
        }else{
            ans = mid;
            end = mid - 1;
        }
    }
    
    return ans;
}


