#include<iostream>
#include<algorithm>
#include<vector>
#include<math.h>
using namespace std;

int main(int argc, char const *argv[])
{
	vector<int> a;
    vector<int> b;
    int size1,size2,k,m;
    cin>> size1>> size2;
    cin >> k>> m;

    a.resize(size1);
    b.resize(size2);

    for (int i = 0; i < size1; i++) {
        cin >> a[i];
    }
    for (int i = 0; i < size2; i++) {
        cin >> b[i];
    }


    int maxArr1 = a[k-1];
    int cnt = 0;
    bool found = false;

    for(int i = b.size()-1;i>=0;i--){
    	if(cnt == m){
    		found = true;
    		break;
    	}

    	if(b[i] > maxArr1) cnt ++;
    	else break;
    }

    if(cnt == m) found = true;

    if(found){
    	cout << "YES";
    }else{
    	cout << "NO";
    }

	return 0;
}