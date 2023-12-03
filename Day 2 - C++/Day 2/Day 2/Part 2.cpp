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
			istringstream ssline(line);
			string pull;
			
			currentline++;

			int highred = 0;
			int highgrn = 0;
			int highblu = 0;

			bool hasred = false;
			bool hasgrn = false;
			bool hasblu = false;

			while (getline(ssline, pull, ';')) {
				int posred = pull.find("red");
				int posgrn = pull.find("green");
				int posblu = pull.find("blue");

				if (posred != -1 && stoi(pull.substr(posred - 3, 2)) > highred) {
					highred = stoi(pull.substr(posred - 3, 2));
					hasred = true;
				}
				if (posgrn != -1 && stoi(pull.substr(posgrn - 3, 2)) > highgrn) {
					highgrn = stoi(pull.substr(posgrn - 3, 2));
					hasgrn = true;
				}
				if (posblu != -1 && stoi(pull.substr(posblu - 3, 2)) > highblu) {
					highblu = stoi(pull.substr(posblu - 3, 2));
					hasblu = true;
				}
			}

			int currentnr = 0;
			bool hassum = false;

			if (hasred) {
				currentnr += highred;
				hassum = true;
			}
			if (hasgrn) {
				if (hassum) {
					currentnr = currentnr * highgrn;
					hassum = true;
				}
				else {
					currentnr += highgrn;
				}
			}
			if (hasblu) {
				if (hassum) {
					currentnr = currentnr * highblu;
					hassum = true;
				}
				else {
					currentnr += highblu;
				}
			}

			total += currentnr;
		}
	}

	cout << total << "\n";

	return 0;
}