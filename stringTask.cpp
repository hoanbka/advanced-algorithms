#include <iostream>
#include <vector>

using namespace std;

bool inArray(char c, char vowels[], int n)
{
    for (int i = 0; i < n; i++) {
        if (vowels[i] == c)
            return true;
    }
    return false;
}

int main()
{
    string s;
    cin >> s;

    char vowels[] = { 'u', 'e', 'o', 'a', 'i', 'y', 'U', 'E', 'O', 'A', 'I', 'Y' };
    vector<char> v;

    for (int i = 0; i < s.length(); i++) {
        if (inArray(s.at(i), vowels, 12)) {
            continue;
        }
        else {
            v.push_back('.');
            char temp = isupper(s.at(i))? tolower(s.at(i)): s.at(i);
            v.push_back(temp);
        }
    }
    string res = string(v.begin(), v.end());
    cout << res;

    return 0;
}