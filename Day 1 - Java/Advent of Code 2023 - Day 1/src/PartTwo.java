import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class PartTwo {
    public static void main(String[] args) {
        try {
            // Get puzzle input
            File puzzleInput = new File("src/input.txt");
            Scanner fileReader = new Scanner(puzzleInput);

            // Setup end value
            int total = 0;

            // Read file line by line
            while (fileReader.hasNextLine()) {
                // Set line to string value
                String line = fileReader.nextLine();

                // Setup temp values
                String stringNumberFirst = "";
                String stringNumberLast = "";

                // Setup number information
                String[][] numbers = {{"one", "1"}, {"two", "2"}, {"three", "3"}, {"four", "4"}, {"five", "5"},
                        {"six" , "6"}, {"seven", "7"}, {"eight", "8"}, {"nine", "9"}};

                // Setup Line range
                int indexFirst = 1000;
                int indexLast = 0;

                // Get first int in line
                for (int i = 0; i <= line.length(); i++) {
                    // Find first int, starting from begin of line
                    if (Character.isDigit(line.charAt(i))) {
                        // Save first number
                        stringNumberFirst = String.valueOf(line.charAt(i));
                        // Save char location in line
                        indexFirst = i;
                        break;
                    }
                }

                // Get first string number in line
                for (String[] s : numbers) {
                    // Check if line contains checked number and has a lower char location than the int
                    if (line.contains(s[0]) && line.indexOf(s[0]) < indexFirst) {
                        // Save new char location
                        indexFirst = line.indexOf(s[0]);
                        // Save new int
                        stringNumberFirst = s[1];
                    }
                }

                // Get last int in line
                for (int i = line.length() - 1; i >= 0; i--) {
                    // Get last int in line
                    if (Character.isDigit(line.charAt(i))) {
                        // Save last number
                        stringNumberLast = String.valueOf(line.charAt(i));
                        // Save char location in line
                        indexLast = i;
                        break;
                    }
                }

                // Get last string number in line
                for (String[] s : numbers) {
                    // Check if line contains checked number and has a higher char location than the int
                    if (line.contains(s[0]) && line.lastIndexOf(s[0]) > indexLast) {
                        // Save new char location
                        indexLast = line.lastIndexOf(s[0]);
                        // Save new int
                        stringNumberLast = s[1];
                    }
                }

                // Combine first and last number and add to total
                total += Integer.parseInt(stringNumberFirst + stringNumberLast);
            }

            // Output total
            System.out.println(total);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
