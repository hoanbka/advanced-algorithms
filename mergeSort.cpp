#include<iostream>
#include<vector>
using namespace std;
#define pb push_back
#define pp pop_back

void swap(int &a, int &b){
    int temp = a;
    a = b;
    b = temp;
}

void mergeSort(int arr[], int n){
    bool check = true;

    while(check){
        check = false;

        for(int i = 0;i< n-1;i++){
            if(arr[i]> arr[i+1]){
                swap(arr[i],arr[i+1]);
                check = true;
            }
        }
    }
}

int main(){

    int arr[] = {5,2,3,1,7,9,3,45,12};
    int n = 9; // size of Array = 9;
    mergeSort(arr,n);

    for(int i = 0;i< n;i++) cout <<" "<< arr[i];
    return 0;
}