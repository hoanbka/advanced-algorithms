#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
	int n;
	cin >> n;

	vector<int> v;
	v.resize(n);
	int total = 0;

	for(int i = 0;i< n;i++){
		cin >> v[i];
		total += v[i];
	} 

	//Sorting a vector in descending order
	sort(v.rbegin(),v.rend()); 
	
	int cnt = 0;
	int larger = 0;

	for(int i = 0;i< n;i++){
		larger += v[i];
		cnt ++;
		if(larger >  total/2) break;
	}

	cout << cnt;
	return 0;
}