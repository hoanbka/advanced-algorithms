#include<bits/stdc++.h>

using namespace std;

int main() {
    int n; std::uint64_t k; cin >> n >> k;

    if (k > (uint64_t) n - 1) {
        k = n - 1;
    }

    auto as = vector<int>(n, 0);
    for (int i = 0; i != n; ++i) {
        cin >> as[i];
    }

    int i = 1;
    auto bs = as;
    int power = as[0];
    uint64_t score = 0;

    while (score != k) {
        if (i == n) {
            as = bs; i = 1;
        }

        if (as[i] > power) {
            score = 1;
            bs[i] = power;
            power = as[i];
        } else {
            // as[i] < power
            ++score;
            bs[i] = as[i];
        }

        ++i;
    }

    cout << power << endl;
}


