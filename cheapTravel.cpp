#include<iostream>
using namespace std;

int main() {
    int n,m,a,b;
    cin >>n;
    cin >>m;
    cin >>a;
    cin >>b;
    
    if(m * a > b)
    {
        int remain = (n % m) * a;
        if(remain > b)
            cout<< n / m * b + b;
        else
            cout <<n / m * b + remain;
    }else
        cout << n*a;
    
    return 0;
    
}

