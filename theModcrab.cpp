#include<iostream>
#include<vector>
using namespace std;
#define pb push_back
#define pp pop_back


int main(){
    int h1,a1,c1;
    cin >> h1 >> a1>> c1;

    int h2,a2;
    cin >> h2 >> a2;

    int cnt = 0;
    vector<string> ans;

        while(true) {
			cnt++;
			if(h1-a2<=0 && h2-a1>0) {
                ans.pb("HEAL");
				h1+=c1-a2;
			}
			else {
				h1-=a2;
				h2-=a1;
				ans.pb("STRIKE");
			}
			if(h2<=0) break;
		}
    

    cout << cnt << endl;

    for(int i = 0;i< ans.size();i++){
        cout << ans[i] << endl;
    }
    return 0;
}

