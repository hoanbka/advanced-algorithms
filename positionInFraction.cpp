#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main(){
    int a,b,c;
    cin >> a >> b >> c;
    
    int cnt = 0;
    bool found = false;
//    cout << 10%3 << endl;
    int r = a%b;
    while(cnt< b+1){
        cnt ++;
        a  = r*10;
        int el = a/b;
//        cout <<"el = "<< el << endl;
        if(el == c ){
            found = true;
            break;
        }
        r = a%b;
//        cout << "r = "<< r << endl;
    } 
    
    if(found) cout << cnt;
    else cout << -1;
    return 0;
}