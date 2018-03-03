#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main(int argc, char const *argv[])
{
	int n;
	cin >> n;

	int xAM =0,
		xDuong = 0;
	int x,y;
	for(int i = 0;i< n;i++){
		cin >> x >> y;

		if(x >0) xDuong ++;
		if(x <0) xAM ++;
	}

	if(xAM >=2 && xDuong >=2) cout <<"No";
	else cout <<"Yes";

	return 0;
}