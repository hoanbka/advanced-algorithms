#include<iostream>
#include<vector>
#include <algorithm>

using namespace std;

int main(int argc, char const *argv[])
{
	int n,k,x;
	cin >> n >> k >> x;

	std::vector<int> v;
	v.resize(n);

	for(int i = 0;i< n;i++) cin >> v[i];

	int min = 0;

	for(int i = 0;i < (n-k);i++) min += v[i];

	cout << min + k*x;
	return 0;
}