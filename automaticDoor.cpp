#include<iostream>
#include<vector>
using namespace std;

int main(){
	int n,m,a,d;
	cin >> n >> m >> a >> d;

	vector<int> times;
	times.resize(m);

	for(int i = 0;i< m;i++){
		cin >> times[i];
	}

	

	return 0;
}


// n , m, a ,d
// n : employees
// m: clients
// a: moment first employee will come
// d: time in which the door closes


// comming: 4 7 9   13
// d = 3
// open: 	 4   9   13
// close:     7   12