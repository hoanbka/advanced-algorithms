vector<string> a{"","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"},
b{"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen", "seventeen", "eighteen", "nineteen"},c{"", "", "twenty-", "thirty-", "forty-", "fifty-", "sixty-", "seventy-", "eighty-", "ninety-"};
string solve(int n) 
{
        if (n < 10) 
            return a[n];
        if (n < 20) 
            return b[n - 10];
        if (n < 100) 
            return c[n / 10] + ((n % 10 != 0) ? " " + solve(n % 10) : "");
        if (n < 1e3)
            return solve(n / 100) + " hundred" + ((n % 100) ? " " + solve(n % 100) : "");
        if (n <= 1e6)
            return solve(n / 1e3) + " thousand" + ((n % 1000) ? " " + solve(n % 1000) : "");
}
string res,t,numberInWords(int number) {
    t=solve(number),res="";
    int i;
    for(auto i:t)
    {
        if(i==' ' && res.back()!='-') res+=i;
        else if(i!=' ') res+=i;
    }
    res[0]=toupper(res[0]);
    if(res.back()=='-') res=res.substr(0,res.size()-1);
    return res;
}
