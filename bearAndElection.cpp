#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

#define pb push_back

int main(){
    int n;
    cin >> n;

    vector<int> v;
    v.resize(n);

    for(int i = 0;i< n;i++) cin >> v[i];

    int voteLimak = v[0];
    int initial = v[0];

    int max = 0;
    int maxCnt = 1;

    for(int i = 1;i< n;i++){

        if(v[i]> max){
            max = v[i];
            maxCnt = 1;
        }else if(v[i]== max){
            maxCnt ++;
        }
    }
    
//    cout << "max = "<< max << " ,maxCnt = " << maxCnt << endl;

    if(voteLimak > max){
        cout << 0;
        return 0;
    }

    while(voteLimak <= max){

        if(voteLimak == max){
            voteLimak ++;
            break;
        }

        if(voteLimak + maxCnt < max ){
            voteLimak +=  maxCnt;
        }else if(voteLimak + maxCnt ==  max){
            voteLimak +=  maxCnt + 1;
            break;
        }else{
            int temp = max - voteLimak;
            voteLimak += temp;
        }
        max -=1;
    }

    cout << voteLimak-initial << endl;
    return 0;
}




