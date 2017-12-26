#include<iostream>
#include<vector>
using namespace std;


bool isFriend(vector<string> v, string s){

	for(int i = 0;i< v.size();i++){
		if(v[i].compare(s)) return true;
	}
	return false;
}

int main(int argc, char const *argv[])
{
	string s;
	cin >> s;

	int cnt = 0;
	vector<string> friends;
	friends = {"Danil", "Olya", "Slava", "Ann","Nikita"};

	
	return 0;
}