#include<iostream>
using namespace std;

int main(){

	int k,n,w;
	cin >> k >> n>> w;

	int money = 0;

	for(int i=1;i<=w;i++){
		money += k*i;
	}

	if(money > n){
		cout<< money - n;
	}else{
		cout<< 0;
	}
	
	return 0;
}