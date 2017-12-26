#include<iostream>
using namespace std;

int main(){
	int n;
	cin >> n;
	string s;
	cin >> s;

	int AntonCnt = 0;
	int DanikCnt = 0;

	for(int i = 0;i <n; i++){
		if(s[i] == 'A') AntonCnt ++;
		else DanikCnt ++;
	}

	if(AntonCnt == DanikCnt){
		cout << "Friendship";
	}else if(AntonCnt > DanikCnt){
		cout << "Anton";
	}else{
		cout << "Danik";
	}
	return 0;
}