
// http://codeforces.com/problemset/problem/320/B
#include<iostream.>
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
using namespace std;
struct Node{
    int l, r;
}a[101];
bool vis[101];
int cnt=0;
bool judge(int a1,int b1){
    if((a[a1].l>a[b1].l&&a[a1].l<a[b1].r)||(a[a1].r>a[b1].l&&a[a1].r<a[b1].r))return true;
    return false;
}
bool dfs(int a1, int b1){
    if(a1==b1)
        return true;
    vis[a1]=true;
    for(int i=1;i<=cnt;i++)
			if(!vis[i]){
        		if(judge(a1,i)&&dfs(i,b1))
            return true;
    }
    return false;
}
int main(){
    int n;
    int q,a1,b1;
    cin>>n;
    while(n--) {
        cin>>q>>a1>>b1;
        if(q==1){
            cnt++;
            a[cnt].l=a1;
            a[cnt].r=b1;
        }
        else{
            memset(vis,false,sizeof(vis));
            if(dfs(a1,b1)) cout<<"YES"<<endl;
            else cout<<"NO"<<endl;
        }
    }
    return 0;
}