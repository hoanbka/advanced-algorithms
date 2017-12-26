#include<iostream>
#include<vector>
using namespace std;

int main(int argc, char const *argv[])
{
	string s;
	cin >> s;

	std::vector<char> v;

	if(s.at(0)=='/') v.push_back(s.at(0));

	for(int i = 1;i< s.length();i++){
		if(s.at(i)=='/'){
			if(v.back()!='/') v.push_back(s.at(i));
		}
		else v.push_back(s.at(i));
	}

	if(v.size()!=1 && v.back()=='/') v.pop_back();

	string out = string(v.begin(),v.end());
	cout << out << endl;

	return 0;
}

