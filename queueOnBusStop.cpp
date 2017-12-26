

#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main() {

    int n, m;
    cin >> n;
    cin >> m;
    int el;
    vector<int> v;
    int ans = 0;

    for (int i = 0; i < n; i++) {
        cin >> el;
        v.push_back(el);
    }

    int sum = 0;
    for (int i = 0; i < n; i++) {

        if (sum + v[i] == m) {
            ans++;
            sum = 0;
        } else if (sum + v[i] > m) {
            ans++;
            sum = v[i];
        } else {
            sum += v[i];
        }
    }

    if (sum > 0) ans++;
    cout << ans;
    return 0;

}