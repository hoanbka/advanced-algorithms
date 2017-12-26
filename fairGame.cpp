#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

int main (){
	int n;
	cin >> n;
	vector<int> v;
	v.resize(n);

	for(int i = 0;i< n;i++) cin >> v[i];

	sort(v.begin(),v.end());

	int cntPetya = 1;
    int cntVasya = 0;
	for(int i = 1;i< n;i++){

		if(v[i] == v[0]) cntPetya ++;
		if(v[i] == v[n-1]) cntVasya ++;
		
		if(cntVasya * 2 > n || cntPetya * 2 > n){
			cout << "NO";
			return 0;
		}
	}
     
	if(cntPetya + cntVasya == n && cntVasya == cntPetya){
		cout<< "YES"<< endl;
		cout << v[0] <<" "<< v[n-1];
	}else cout << "NO";
	
	return 0;
}
