#include<iostream>
using namespace std;

int main (){
	string s;
	cin >> s;

	string standard = "hello";
	int idx = 0;
	int len = s.length();
	bool found =  false;

	for(int i=0;i<len;i++){

		if(s[i] == standard[idx]) idx++;
		// else{
		// 	if(s[i] == standard[idx -1]) continue;
		// 	else idx = 0;
		// }

		if(idx == standard.length()){
			found = true;
			break;
		}
	}

	if(found){
		cout << "YES";
	}else{
		cout << "NO";
	}
	return 0;
}