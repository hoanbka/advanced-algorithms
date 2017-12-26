#include<iostream>
#include<vector>
using namespace std;

int main(){
	int n,k;
	cin >> n >>k;

	auto a = vector<int>(n, 0);
	for(int i = 0;i< n;i++) cin >> a[i];

	int temp = a[0] > a[1] ? a[0] :a[1];
	a.erase(a.begin());
	a.erase(a.begin());

	int games = 1;
	int j = 0;
	auto backup = a;
	while(games < k){

		if(j == n){
			a = backup;
			j = 0;
		}

		if(temp < a[j]){
			backup[j] = temp;
			temp = a[j];
		}else{
			backup[j] = a[j];
			j++;
		}

		
		games ++;

	}

	cout << temp << endl;
}