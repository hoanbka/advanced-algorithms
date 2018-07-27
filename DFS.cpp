#define vi vector<int>
#define vvi vector<vi>
#define forn(i,n) for(i=0;i<n;i++)
// line : y = ax +b
vector<double> pt(int x1, int y1, int x2, int y2)
{
	if(x1==x2) return {0,0};
	double a = double(y1-y2)/(x1-x2), b= y1- a* x1;
	return {a,b};
}
//distance between A(xo, yo) and line : ax - y + b=0
//Formula : distance = abs ( axo - 1 +b) / sqrt(a^b + 1)
double dis(int xo, int yo, vector<double> pt)
{
	double mau = sqrt(pt[0] * pt[0] + 1), tu = fabs(xo*pt[0] - yo + pt[1]);
	return tu/mau;
}
// distance between A (xo,yo) and B(x1,y1)
double disPoints(int xo, int yo, int x1, int y1)
{
	return sqrt( (xo - x1)*(xo - x1) + (yo - y1) * (yo - y1));
}
// array a will store value to represent that it's possible to pass the ball from i to j
// a[i][j] =1 => possilbe
// a[i][j] = 0 => impossible
int dd[101], a[101][101],n;
// DFS Algorithm
void dfs(int u)
{
    if (dd[u])
        return;
    dd[u] = 1;
    for (int i = 0; i < n; i++)
        if (a[u][i])
            dfs(i);
}
bool canScore(vvi attackingPlayers, vvi defendingPlayers, int d) {
    int i,j,k,n1;
    n1=defendingPlayers.size();
    n=attackingPlayers.size();
    vector<double> temp;
	bool flag;
	forn(i,n)
	{
		forn(j,n)
		{
			if(i!=j)
			{
                // we will check if it's possilbe for attackingPlayer[i] to give attackingPlayer[j] the ball
                // flag = 1 => possible , flag =0 => impossible
				flag=1;
                // Store coordinates of attackingPlayer[i], attackingPlayer[j] ( just to shorten the code)
				int x1 = attackingPlayers[i][0], y1 = attackingPlayers[i][1] ,
                x2 = attackingPlayers[j][0], y2 = attackingPlayers[j][1];
                // y = ax +b , temp stores a and b
				temp = pt(x1,y1,x2,y2);
				forn(k,n1)
				{
					int d1 = defendingPlayers[k][0], d2 = defendingPlayers[k][1];
                    // dis1: distance from defendingPlayer[k] to the ball-line
                    // dis2: distance between attackingPlayer[i] and defendingPlayer[k]
                    // dis3: distance between attackingPlayer[j] and defendingPlayer[k]
					double dis1 = dis(d1,d2,temp), dis2 = disPoints(x1,y1,d1,d2),
                    dis3= disPoints(x2,y2,d1,d2), c = d*1.0;
					if(x1>x2) swap(x1,x2);
                    // if dis1 < d ( we use c = d*0.1) and defendingPlayer[k] is between attackingPlayer[i]
                    // and attackingPlayer[j]  or dis2 < d or dis3 < d
                    // => it's impossible to pass the ball 
					if(dis1 < c && x1 <= d1 && d1 <= x2 || dis2 < c || dis3 < c || 
                       x1 == x2 && disPoints(x1,y1,d1,d2) < d)
					{
						flag=0;
						break;
					}
				}
                //flag = 1 => it's possible for attackingPlayer[i] to give attackingPlayer[j] the ball
                //so a[i][j] =1 ;
				if(flag)
					a[i][j]=1;
				else a[i][j]=0;
			}
		}
	}
    //Implement DFS algorithm
	dfs(0);
    //Finally, check if we can go to the last attackingPlayer or not
	return dd[n-1];
}
