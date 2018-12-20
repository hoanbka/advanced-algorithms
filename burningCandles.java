int burningCandles(int[] candleSizes, int n) {
    // sort array
    Arrays.sort(candleSizes);
    
    ArrayList<Integer> list = new ArrayList<Integer>();
    for(int i = 0;i< candleSizes.length;i++){
        list.add(candleSizes[i]);
    }
    
    int total = 0;
    int cnt = 0;
    int tmp = 0;
    while(list.size() > 0){
        cnt ++;
        // get max value in list
        int burnedCandle = list.get(list.size()-1);
        
        // remove the maximum candle
        list.remove(list.size()-1);
        
        tmp += burnedCandle;
        total += burnedCandle;
        
        if(cnt == n){
            // make new candle
            int newCandle = (int) Math.round(tmp/(n+1));
            
            cnt = 0;
            tmp = 0;
            if(newCandle == 0) continue;
            
            // find index in order to insert newCandle to list
            int index = sortedIndex(list, newCandle);
            
            // add element to list
            list.add(index, newCandle);
        }
    }
    
    return total;
}

// using binary search to find the position in list to insert value
int sortedIndex(ArrayList<Integer> list, int value) {
    int low = 0,
        high = list.size();

    while (low < high) {
        int mid = (low + high) >>> 1;
        if (list.get(mid) < value) low = mid + 1;
        else high = mid;
    }
    return low;
}