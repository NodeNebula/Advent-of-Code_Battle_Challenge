import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class PartOne {
    public static void main(String[] args) {
        try {
            File puzzleInput = new File("src/input.txt");
            Scanner fileReader = new Scanner(puzzleInput);

            int total = 0;

            while (fileReader.hasNextLine()) {
                String line = fileReader.nextLine();

                String stringNumber = "";

                for (int i = 0; i < line.length(); i++) {
                    if (Character.isDigit(line.charAt(i))) {
                        stringNumber += line.charAt(i);
                    }
                }

                String currentNumber = String.valueOf(stringNumber.charAt(0)) +
                        String.valueOf(stringNumber.charAt(stringNumber.length() - 1));
                total += Integer.parseInt(currentNumber);
            }

            System.out.println(total);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}