#include<iostream>
#include<vector>
#include<iomanip>
#include<stdlib.h> 
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v;
    v.resize(n);

    for (int i = 0; i < n; i++) cin >> v[i];
    if (v.size() == 1) {
        cout << 0;
        return 0;
    }
    long long sum = 0;
    int j = 0;
    int i = 0;
    int cnt = 0;
    while (true) {

        if (j == n - 1) {
            cnt++;
            i = cnt;
        }

        if (cnt == n - 1) break;
        j = i + 1;
        if (abs(v[cnt] - v[j]) > 1) {
            sum += v[j] - v[cnt];
        }
        i++;
    }
    cout << sum << endl;
    return 0;
}