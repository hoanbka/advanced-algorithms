#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int, int> ii;
vector<int> v;

int main() {
    int n, m, elm;
    cin >> n >> m;

    for (int i = 0; i < m; ++i) {
        cin >> elm;
        v.push_back(elm);
    }

    if (m == 1 || m == 0) {
        if (m == 0 || (v[0] != 1 && v[0] != n))
            cout << "YES";
        else
            cout << "NO";
        return 0;
    }

    sort(v.begin(), v.end());

    bool ans = 1;
    int prev, curr, next;
    prev = -1;
    curr = v[0];

    for (int i = 1; i < m; ++i) {
        next = v[i];
        if (prev + 1 == curr && curr + 1 == next) {
            ans = 0;
            break;
        }
        prev = curr;
        curr = next;
    }

    if (v[0] == 1 || v[m - 1] == n)
        ans = 0;
    if (ans)
        cout << "YES";
    else
        cout << "NO";
    return 0;
}


// 2 3 4 6 8
// 2 4 5 7 9