#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

bool isExist(vector<char> v, char c){
	for(int i = 0;i< v.size();i++){
		if( v[i] == c) return true;
	}

	return false;
}

int main (){
	string s;
	std::getline (std::cin,s);
	std::vector<char> v;

	for(int i = 0;i< s.length();i++){
		if(s.at(i)>='a' && s.at(i) <='z'){
			if(!isExist(v,s.at(i))) v.push_back(s.at(i));
		} 
	}

	cout << v.size();

	return 0;
}