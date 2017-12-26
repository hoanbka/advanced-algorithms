#include<iostream>
#include<vector>
#include<algorithm>
#include<string>
using namespace std;

int main(){
	string s;
	cin >> s;
	vector<int> v;

	for(int i = 0;i< s.length() ;i++){
		if(i%2 ==0){
			if(s[i]=='1') v.push_back(1);
			else if(s[i]=='2') v.push_back(2);
			else v.push_back(3);
		}
	}

	sort(v.begin(),v.end());
	string output = to_string(v[0]);

	for(int i = 1;i< v.size();i++){
		output.append("+");
		output.append(to_string(v[i]));
	}

	cout << output;
	return 0;
}