#include<iostream>
#include<vector>
using namespace std;

int main(){
	int n;
	cin >> n;
	vector<string> v;

	v.resize(n);
	for(int i =0;i< n;i++) cin >> v[i];

	for(int i = 0;i< n;i++){
		if(v[i].length()>10){
			int mid = v[i].length()-2;
			cout<<v[i][0]<<mid<<v[i][v[i].length()-1] << endl;
		}else{
			cout << v[i] << endl;
		}
	}

	return 0;
}