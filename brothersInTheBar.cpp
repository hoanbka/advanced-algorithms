int brothersInTheBar(std::vector<int> g)
{
    vector<int> v;
    v.push_back(g[0]);

    int cnt = 0;

    for (int i = 1; i < g.size(); i++) {
        if(v.size() >= 2){
            if (g[i] == v.back() && g[i] == v[v.size() - 2]) {
                cnt++;
                v.pop_back();
                v.pop_back();
                continue;
            }
        }
            
        v.push_back(g[i]);
    }
    return cnt;
}
