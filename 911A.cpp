#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
    long n;
    cin >> n;
    vector<long> v;
    vector<int> ans;
    long el;
    for(int  i =0;i< n;i++){
        cin >> el;
        v.push_back(el);
    }
    
    long min = v[0];
    ans.push_back(0);
    for(int i = 1;i< n;i++){
        if(v[i]< min){
            min = v[i];
            ans.clear();
            ans.push_back(i);
        }else if(v[i]==min){
            ans.push_back(i);
        }
    }

    int minDistance = ans[1]- ans[0];
    for(int i = 0;i< ans.size()-1;i++){
        int t = ans[i+1]- ans[i];
        if(t < minDistance ){
           minDistance = t;
        }
    }
    cout << minDistance;
    return 0;
}