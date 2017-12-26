#include<iostream>
#include<algorithm>
using namespace std;

int main (){
	int arr[6];

	for(int i=0;i<6;i++){
		cin >> arr[i];
	}

	sort(arr,arr+6);

	int sum = 0;
	for(int i=0;i<6;i++){
		sum += arr[i];
	}

	int check = sum/2 - arr[0];
	for(int i=1;i<5;i++){

		int temp = arr[i];
		for(int j=i+1;j<6;j++){
			temp += arr[j];
			
			if(check == temp) {
			cout << "YES";
			return 0;
			}
		}
	}

	cout << "NO";
	return 0;
}