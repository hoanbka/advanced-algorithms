int sleddingHills(int[] enjoyability, int maxRuns) {
    
    int total = 0;
    // sort array
    Arrays.sort(enjoyability);
    ArrayList<Integer> list = new ArrayList<Integer>();
    
    for(int i = 0;i< enjoyability.length;i++){
        list.add(enjoyability[i]);
    }
    
    while(maxRuns > 0){
        int max = list.get(list.size()-1);
        int next = max - 1;
        if(max <=0){
            break;
        }
        
        total += max;
        
        // remove last element in list
        list.remove(list.size()-1);
        
        // insert (max-1) into list to maintain a sorted list
        int position = binarySearchPosition(list, next);
        
        if(position == -1){
            list.add(next);
        }else{
            list.add(position, next);
        }
        
        maxRuns -=1;
    }
    
    
    return total;
}

int binarySearchPosition(ArrayList<Integer> list, int target){
    int start = 0, end = list.size()-1;
    int ans = -1;
    
    while(start <= end){
        int mid = ((start + end)/2);
        
        if(list.get(mid) <= target){
            start = mid + 1;
        }else{
            ans = mid;
            end = mid - 1;
        }
    }
    
    return ans;
}