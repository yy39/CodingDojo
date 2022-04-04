import java.util.ArrayList;

public class FirstArrayList {
    public static void main(String[] args) {
        ArrayList<Integer> myArray = new ArrayList<Integer>();
        myArray.add(10);
        myArray.add(11);
        System.out.println(myArray);

        ArrayList<Object> things = new ArrayList<Object>();
        things.add(10);
        things.add("Hello");
        things.add(new ArrayList<Integer>());
        things
        System.out.println(things);
        System.out.println(things.get(2));
    }
}

