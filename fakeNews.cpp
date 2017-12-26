#include <iostream>
using namespace std;

int main(){

    string s;
    cin >> s;

    string standard = "heidi";
    int index  = 0;

    for(int i=0;i< s.length();i++){
        if(s.at(i)==standard.at(index)) index ++;
        if(index ==standard.length()) {
            cout <<"YES";
            return 0;
        }
    }
    
    cout <<"NO";
    return 0;
}