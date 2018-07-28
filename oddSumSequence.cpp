int oddSumSequence(std::vector < int > v) {
    map < string, int > map;
    stringstream ss;
    copy(v.begin(), v.end(), ostream_iterator < int > (ss, "-"));
    string s = ss.str();

    map[s] = 0;
    int cnt = 0;
    vector < int > temp;

    while (true) {

        cnt++;
        int sum = 0;

        for (int i = 0; i < v.size(); i++) {
            if (v.at(i) % 2 != 0) sum += v.at(i);
            temp.push_back(sum);
        }

        stringstream s2;
        copy(temp.begin(), temp.end(), ostream_iterator < int > (s2, "-"));
        string s3 = s2.str();

        if (map.count(s3) > 0) {
            return map[s3];
        }
        map[s3] = cnt;
        v.clear();
        v = temp;
        temp.clear();
    }

    return 0;
}