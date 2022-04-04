import java.util.ArrayList;

public class CafeUtil {
    int getStreakGoal() {
        int numDrinks = 0;
        for (int i = 1; i <= 10; i++) {
            numDrinks += i;
        }
        return numDrinks;
    }

    double getOrderTotal(double[] prices) {
        double totalPrice = 0;
        for (int i = 0; i < prices.length; i++) {
            totalPrice += prices[i];
        }
        return totalPrice;
    }

    void displayMenu(ArrayList<String> menuItems) {
        int i = 0;
        for (String item: menuItems) {
            System.out.println(String.format("%d %s", i, item));
            i++;
        }
    }

    void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName);
        System.out.println(String.format("The are %d people in front of you.", customers.size()));
        customers.add(userName);
        System.out.println(customers);
    }
}