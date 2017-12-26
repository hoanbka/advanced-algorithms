#include<iostream>
using namespace std;

int main (){

    string s;
    cin >>s;

    int zeroes = 0;
    int ones = 0;
    bool found = false;

    for(int i=0;i< s.length();i++){

        if(zeroes == 7 || ones == 7){
            found = true;
            break;
        }
        if(s.at(i)=='0'){
            zeroes ++;
            ones  =  0;
        }else{
            ones ++;
            zeroes =  0;
        }
    }
    
    if(zeroes == 7 || ones == 7){
        found = true;
    }

    if(found) cout << "YES";
    else cout << "NO";

    return 0;
}