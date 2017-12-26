#include<iostream>
#include<vector>
using namespace std;

int main (){
	int n;
	cin >> n;
	vector<string> v;
	v.resize(n);

	for(int  i =0;i<n;i++) cin >> v[i];
	int x = 0;
	for(int i = 0;i< n;i++){
		if(v[i][0] == '+' || v[i][1]== '+') x++;
		else x--;
	}

	cout << x;
	return 0;
}