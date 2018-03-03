#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector< pair <int, int> > v;
    for (int i = 0; i < n; i++) {
        int x, y;
        cin >> x >> y;
        v.push_back(make_pair(x, y));
    }

    for (int i = 1; i < n; i++) {
        if (v[i].first > v[i - 1].second) {
            cout << "NO";
            return 0;
        }
    }
    cout << "YES";
    return 0;
}

