#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>
using namespace std;

int main() {
    string line;
    ifstream myfile("input.txt");
    int currentline{};
    int total{};

    if (myfile.is_open()) {
        while (getline(myfile, line)) {
            istringstream ss(line);
            string pull;
            bool hasHigher = false;

            currentline++;

            while (getline(ss, pull, ';')) {
                int posred = pull.find("red");
                int posgrn = pull.find("green");
                int posblu = pull.find("blue");

                const int maxred = 12;
                const int maxgrn = 13;
                const int maxblu = 14;

                if (posred != -1) {
                    if (stoi(pull.substr(posred - 3, 2)) > maxred) {
                        hasHigher = true;
                    }
                }
                if (posgrn != -1) {
                    if (stoi(pull.substr(posgrn - 3, 2)) > maxgrn) {
                        hasHigher = true;
                    }

                }
                if (posblu != -1) {
                    if (stoi(pull.substr(posblu - 3, 2)) > maxblu) {
                        hasHigher = true;
                    }
                }
            }

            if (!hasHigher) {
                total += currentline;
            }
        }
        myfile.close();
    } else cout << "Unable to open file";

    cout << total << "\n";
    return 0;
}

// 5050 too high

// 2330 too low