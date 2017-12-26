#include<iostream>
#include<vector>
using namespace std;
typedef long long ll;

int main() {
    ll n;
    cin >> n;

    vector<ll> a;
    vector<ll> b;
    a.resize(n);
    b.resize(n);

    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < n; i++) cin >> b[i];

    ll remainingTotal = 0;
    ll max1 = 0;
    ll max2 = 0;

    for (int i = 0; i < n; i++) {

        remainingTotal += a[i];
        if (b[i] > max1) {
            max2 = max1;
            max1 = b[i];
        } else if (b[i] > max2) {
            max2 = b[i];
        } 
    }

    if (remainingTotal > max1 + max2) {
        cout << "NO";
    } else cout << "YES";

    return 0;
}

// 5 5 0
// 5 5 4