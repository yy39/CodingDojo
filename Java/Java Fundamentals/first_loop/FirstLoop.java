import java.util.ArrayList;

public class FirstLoop {
    public static void main(String[] args) {
        ArrayList<Object> myArray = new ArrayList<Object>();
        for (int i = 0; i < 5; i++) {
            myArray.add(i);
        }
        System.out.println(myArray);
    }
}