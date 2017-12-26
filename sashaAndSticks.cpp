#include<iostream>
using namespace std;

int main(){
	long long n,k;
	cin >> n >>k;

	long games = n/k;
	if(games % 2 !=0){
		cout<< "YES";
	}else{
		cout<< "NO";
	}
	return 0;
}