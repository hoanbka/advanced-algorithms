int sleddingHillsExtreme(int[] enjoyability, int maxRuns) {
    int total = 0;
    // declare a priority queue
    PriorityQueue<Integer> queue = new PriorityQueue<>((x, y) -> y - x);
    
    for(int i = 0;i< enjoyability.length;i++){
        queue.add(enjoyability[i]);
    }
     
    while(maxRuns > 0){
        // get max value in queue
        int max = queue.peek();
        int next = max - 1;
        if(max <= 0){
            break;
        }
        
        // add max to total
        total  = (total + max) % 1000000007;
        
        // remove max element
        queue.poll();
        
        // add value (max-1) to queue
        queue.add(next);
        
        // update maxRuns
        maxRuns -=1;
    }
    
    return total;
}

