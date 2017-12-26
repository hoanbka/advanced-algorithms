#include<iostream>
#include<vector>
#include<string>
using namespace std;

int main(){
    int n;
     cin >> n;
     string s;
     cin.ignore();
     getline(std::cin,s);

    int max  = 0;
    int temp = 0;
    for(int i = 0;i< n;i++){
        if(!isspace(s.at(i))){
            if(isupper(s.at(i))) temp ++;
        }else{
            max = temp > max? temp : max;
            temp = 0;
        }
    }
    max = temp > max? temp : max;
    cout << max << endl;
    return 0;
}