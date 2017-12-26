#include<iostream>
using namespace std;

int main(){
	int a,b;
	cin >> a >> b;

	int min = 101, max = 0;

	min = a < b ? a : b;
	max = a > b ? a : b;

	int remainder = 0;
	remainder = (max - min)/2;

	cout << min << " " << remainder;

	return 0;
}