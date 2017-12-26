#include<iostream>
#include<vector>

using namespace std;

int indexOf(int el, vector<int> v, int sizeOfCandidate){

    for(int i=0;i< sizeOfCandidate;i++){
        if(v[i]==el) return 0;
    }
    return -1;
}

int main (){
    int n;
    cin >> n;
    int arr[n];

    for(int i=0;i<n;i++){
        cin >> arr[i];
    }

    vector<int> v;

    if(arr[0]==1){
        v = {1, 3};
    }else if(arr[0]==2){
        v = {2, 3};
    }else{
        cout << "NO";
        return 0;
    }

    for (int i = 1; i < n; i++) {
        if (indexOf(arr[i],v,2) == -1) {
            cout << "NO";
            return 0;
        }
        
        if(arr[i] == 1){
            if(indexOf(2,v,2) == -1){
                v = {1, 2};
            }else{
                v = {1, 3};
            }
        }else if(arr[i] == 2){
            if(indexOf(3,v,2) == -1){
                v  = {2, 3};
            }else{
                v = {2, 1};
            }
        }else{
            if(indexOf(1,v,2) == -1){
                v = {3, 1};
            }else{
                v  =  {3, 2};
            }
        }
    }
    cout<< "YES";
    return 0;
}