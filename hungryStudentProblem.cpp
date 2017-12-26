#include<iostream>
#include<vector>
#include<iomanip>
using namespace std;

int main(int argc, char const *argv[]) {
    int n;
    cin >> n;

    vector<int> v;
    v.resize(n);

    for (int i = 0; i < n; i++) cin >> v[i];


    for (int i = 0; i < n; i++) {
        bool found = false;
        for (int x = 0; x <= v[i] / 3; x++) {
            int y = 0;

            while (y <= v[i] / 7) {
                if (3 * x + 7 * y == v[i]) {
                    found = true;
                    break;
                }
                y++;
            }
            if (found) {
                cout << "YES" << endl;
                break;
            }
        }

        if (!found) cout << "NO" << endl;

    }

    return 0;
}