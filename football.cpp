#include<iostream>
#include<vector>
#include<map>
using namespace std;

int main(){
	int n;
	cin >> n;
	vector<string> v;
	v.resize(n);

	for(int i = 0;i< n;i++) cin >> v[i];

	map<string,int> m;
	int max = 0;
	
	for(int i = 0;i< n;i++){

		if(m.count(v[i]) > 0){
			m[v[i]] ++;
		}else m[v[i]] =1;

		max = max < m[v[i]] ? m[v[i]]: max;
	}

	for(int i = 0;i< n;i++){
		if(m[v[i]]== max){
			cout << v[i];
			break;
		} 
	}

	return 0;
}