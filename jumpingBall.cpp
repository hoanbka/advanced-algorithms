#include<iostream>
using namespace std;

int main (){
	int n;
	cin >> n;
	string s;
	cin >> s;

	
	char move = '>';
	char back = '<';
	int solution = 0;
	int i = 0;

	while(i < n && s[i] == back){
		solution ++;
		i ++;
	}

	i = n-1;
	while (i > -1 && s[i] == move){
		solution ++;
		 i --;
	}

	cout<< solution;
	return 0;
}