#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

bool isVowel(char c){
    if(c == 'a'|| c == 'e'|| c == 'i' || c == 'o'|| c == 'u') return true;
    return false;
}

bool isEven(char c){
    if(c == '0'|| c == '2'|| c == '4' || c == '6'|| c == '8') return true;
    return false;
}
int main (){
    string s;
    cin >> s;
    
    int cnt = 0;
    
    for(int i = 0;i< s.length();i++){
        if(isVowel(s.at(i))) cnt ++;
        else if (s.at(i)>='0' && (s.at(i)<='9') && !isEven(s.at(i)))  cnt ++;
        
    }
    cout << cnt << endl;
    return 0;
}