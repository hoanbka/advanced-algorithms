#include<iostream>
#include<vector>
#include <algorithm>
using namespace std;

#define n = 10000;
int memo[n+1]; // we will initialize the elements to -1 ( -1 means, not solved it yet )

		int getMinSteps ( int n )

		{

		if ( n == 1 )  return 0;  // base case

		if( memo[n] != -1 ) return memo[n];  // we have solved it already :)

		int r = 1 + getMinSteps( n - 1 );  // '-1' step .  'r' will contain the optimal answer finally

		if( n%2 == 0 )   r  =  min( r , 1 + getMinSteps( n / 2 ) ) ;  //  '/2' step

		if( n%3 == 0 )   r  =  min( r , 1 + getMinSteps( n / 3 ) ) ;  //  '/3' step

		memo[n] = r ;  // save the result. If you forget this step, then its same as plain recursion.

		return r;

		}

int main(int argc, char const *argv[])
{
		
	int steps = getMinSteps(10);
	cout << "steps = "<< steps << endl;
	return 0;
}