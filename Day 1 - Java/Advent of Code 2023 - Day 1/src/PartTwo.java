import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class PartTwo {
    public static void main(String[] args) {
        try {
            File puzzleInput = new File("src/input.txt");
            Scanner fileReader = new Scanner(puzzleInput);

            int total = 0;

            while (fileReader.hasNextLine()) {
                String line = fileReader.nextLine();

                String stringNumberFirst = "";
                String stringNumberLast = "";
                String[][] numbers = {{"one", "1"}, {"two", "2"}, {"three", "3"}, {"four", "4"}, {"five", "5"},
                        {"six" , "6"}, {"seven", "7"}, {"eight", "8"}, {"nine", "9"}, {"zero", "0"}};
                int indexFirst = 0;
                int indexLast = 0;

                for (int i = 0; i < line.length(); i++) {
                    if (Character.isDigit(line.charAt(i))) {
                        stringNumberFirst = String.valueOf(line.charAt(i));
                        indexFirst = i;
                        break;
                    }
                }
                for (String[] s : numbers) {
                    if (line.contains(s[0]) && line.indexOf(s[0]) < indexFirst) {
                        indexFirst = line.indexOf(s[0]);
                        stringNumberFirst = s[1];
                    }
                }

                for (int i = line.length() - 1; i > 0; i--) {
                    if (Character.isDigit(line.charAt(i))) {
                        stringNumberLast = String.valueOf(line.charAt(i));
                        indexLast = i;
                        break;
                    }
                }
                for (String[] s : numbers) {
                    if (line.contains(s[0]) && line.indexOf(s[0]) > indexLast) {
                        indexLast = line.indexOf(s[0]);
                        stringNumberLast = s[1];
                    }
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
