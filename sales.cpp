#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main(int argc, char const* argv[])
{
    double *sale = nullptr,
           total = 0,
           avarage;
    int numDays,
        count;

    cout << "How many days of sales figures do you wish ?";
    cout << "to process ? ";
    cin >> numDays;

    // Dynamically allocate an array large enough to hold
    // that many days of sales amounts.
    sales = new double[numDays];

    // Get the sales figures for each day.
    cout << "Enter the sales figures below.\n";
    for (count = 0; count < numDays; count++) {
        cout << "Day " << (count + 1) << ": ";
        cin >> sales[count];
    }

    // Calculate the total sales
    for (count = 0; count < numDays; count++) {
        total += sales[count];
    }

    // Calculate the average sales per day
    average = total / numDays;

    // Display the results
    cout << fixed << showpoint << setprecision(2);
    cout << "\n\nTotal Sales: $" << total << endl;
    cout << "Average Sales: $" << average << endl;

    // Free dynamically allocated memory
    delete[] sales;
    sales = nullptr; // Make sales a null pointer.

    return 0;
}
