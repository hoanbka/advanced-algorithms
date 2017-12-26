#include<iostream>
#include<vector>

using namespace std;


int main(){

    vector<int> v;
	int n, k;
	cin >> n >> k;
    v.resize(n);
    
	for (int i = 0; i < v.size(); i++) {
        cin >> v[i];
	}
    int ans = 0;

    if(v[0]==0){
        cout <<0;
        return 0;
    }

    for(int i=0;i<n;i++){
        if(v[i]!=0){
            if(v[i]>=v[k-1]) ans++;
            else break;
        }
        else break;
    }
    cout << ans;
    return 0;
}


