#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
	int n, t;
	cin >> n >> t;

	vector<int> v;
	v.resize(n);

	for(int i = 0;i< n;i++) cin >> v[i];

	int freeTotal = 0;
	int days = 0;

	for(int i = 0;i< n;i++){
		if(freeTotal >= t) break;

		freeTotal += 86400 - v[i];
		days ++;
	}
	cout << days<< endl;
	
	return 0;
}