#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

int main(){
	int n;
	cin >> n;
	string s;
	cin >> s;

	int sfCnt = 0, sCnt = 0;

	for(int  i =1;i< n;i++){
		if(s[i] == 'F' && s[i-1] == 'S') sfCnt ++;
		else if (s[i] == 'S' && s[i-1] == 'F') sCnt ++;
	}

	if(sfCnt > sCnt){
		cout << "YES";
	}else{
		cout << "NO";
	}
	return 0;
}


