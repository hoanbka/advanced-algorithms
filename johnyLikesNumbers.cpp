#include<iostream>
#include<vector>
#include<map>
using namespace std;

int main(int argc, char const *argv[])
{
	int n,k;
	cin >> n >> k;
	int times = 1;

	while(true){
		
		if(k*times > n) break;
		times ++;
	}

	cout << k*times;
	return 0;
}