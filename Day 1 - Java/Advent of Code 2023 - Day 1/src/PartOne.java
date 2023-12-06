import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class PartOne {
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

                // Setup temp value
                String stringNumber = "";

                // Go through all chars
                for (int i = 0; i < line.length(); i++) {
                    // Check if char is int
                    if (Character.isDigit(line.charAt(i))) {
                        // Add int to string line
                        stringNumber += line.charAt(i);
                    }
                }

                // Get first and last digit and set to string
                String currentNumber = String.valueOf(stringNumber.charAt(0)) +
                        String.valueOf(stringNumber.charAt(stringNumber.length() - 1));
                // Add number onto total
                total += Integer.parseInt(currentNumber);
            }

            // Output total
            System.out.println(total);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}