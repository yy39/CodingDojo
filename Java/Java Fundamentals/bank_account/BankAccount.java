public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private static int numOfAccounts = 0;
    private static double grossAmount = 0.00;

    public BankAccount() {
        this(0.0, 0.0);
        numOfAccounts++;
    }

    public BankAccount(double checking, double savings) {
        this.checkingBalance = checking;
        this.savingsBalance = savings;
        grossAmount += checking + savings;
        numOfAccounts++;
    }

    private double getCheckingBalance() {
        return this.checkingBalance;
    }

    private double getSavingsBalance() {
        return this.savingsBalance;
    }

    private void depositToChecking(double amount) {
        this.checkingBalance += amount;
        grossAmount += amount;
    }

    private void depositToSavings(double amount) {
        this.savingsBalance += amount;
        grossAmount += amount;
    }

    private void withdrawFromChecking(double amount) {
        if (this.checkingBalance < amount) {
            System.out.println("Insufficient funds.");
        } else {
            this.checkingBalance -= amount;
        }
    }

    private void getBalances() {
        System.out.println("Checking Balance: $" + this.checkingBalance);
        System.out.println("Savings Balance: $" + this.savingsBalance);
    }

    public static void main(String[] args) {
        BankAccount account1 = new BankAccount(4.20, 420.69);
        BankAccount account2 = new BankAccount();
        account1.getCheckingBalance();
        account2.getSavingsBalance();
        account2.depositToChecking(10);
        account1.withdrawFromChecking(10);
        account1.getBalances();
        System.out.println(BankAccount.numOfAccounts);
        System.out.println(BankAccount.grossAmount);
    }
}