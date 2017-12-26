#include<iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    string arr[n];

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    char check = arr[0][1];
    int ans = 1;

    for (int i = 1; i < n; i++) {
        if (arr[i][1] != check) {
            ans++;
            check = arr[i][1];
        }
    }
    cout << ans;
    return 0;
}