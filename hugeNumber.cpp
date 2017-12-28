#include<iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool compare(string s1, string s2){
	string a = s1.append(s2);
	string b = s2.append(s1);

	for(int i = 0;i< a.length();i++){
		if(a.at(i)<b.at(i)) return true;
		else if (a.at(i) > b.at(i)) return false;
	}
}

std::string hugeNumber(std::vector<std::string> nums) {
       int len  =  nums.size();

       for(int i = 0;i< len-1;i++){

       		for(int j = i+1;j< len;j++){
       			if(compare(nums[i],nums[j])== true){
       				iter_swap(nums.begin() + i, nums.begin() + j);
       			}
       		}
       }

       string out = "";
       for(int i = 0;i< len;i++){
       		out.append(nums[i]);
       		cout << " "<< nums[i];
       }

       return out.erase(0, min(out.find_first_not_of('0'), out.size()-1));

}

int main(int argc, char const *argv[])
{
	string arr[] = {"9","90","990","88"};

	std::vector<string> v;

	for(int  i = 0;i< arr.length();i++) v.push_back(arr[i]);
	string out = hugeNumber(v);
	cout << "out = "<< out << endl;
	return 0;
}