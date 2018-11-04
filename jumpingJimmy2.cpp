int jumpingJimmy2(std::vector<int> tower, std::vector<int> power, std::vector<int> poison, int jumpHeight) {
    int totalHeight = 0;
    int tmp = 0;
    
    for(int i = 0;i< tower.size();i++){
        if(tmp +  tower.at(i) >= jumpHeight){
            
            if(tmp + tower.at(i) == jumpHeight){
                totalHeight += tower.at(i);
                tmp = 0;
                
                if(std::find(power.begin(), power.end(), i) != power.end()){
                    jumpHeight +=1;
                }else if (std::find(poison.begin(), poison.end(), i) != poison.end()){
                    jumpHeight -=1;
                }
            }else{
                if(std::find(power.begin(), power.end(), i-1) != power.end()){
                    jumpHeight +=1;
                }else if (std::find(poison.begin(), poison.end(), i-1) != poison.end()){
                    jumpHeight -=1;
                }
                
                tmp = tower.at(i);
                if(tmp > jumpHeight) break;
                
                totalHeight += tower.at(i);
                
            }
        }else{
            tmp += tower.at(i);
            totalHeight += tower.at(i);
        }
    }
    
    return totalHeight;
}
