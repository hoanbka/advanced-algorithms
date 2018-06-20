int length(int n){
	int count=1;
	while(n/10!=0){
		n=n/10;
		count++;
	}
	return count;
}
int return_sum(int n){
	int sum=0;
	do{
		sum+=n%10;
		n=n/10;
	}while(n/10!=0);
	sum+=n;
	return sum;
}

int secretNumber(int n,int sum , k){
	int count=0;
	int i=10;
	vector<int> ans;
	do{
		//printf("%d,%d",length(i),n);
		if(length(i)<=n){
			if(return_sum(i)==sum && length(i)==n){
			 	ans.push_back(i);
				printf("%d ",i);
				count++;
			}
		
			i++;
		}
		else{
			break;
		}
		
	}while(1);
	
	return ans[k];
}