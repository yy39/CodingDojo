class BankAccount:
    all_accounts = []

    def __init__(self, int_rate=0.0, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance > amount:
            print(
                f'Withdrawing ${amount}...\n\nCurrent Balance: ${self.balance} - ${amount}')
            self.balance -= amount
            print(f'New Balance: ${self.balance}\n')
        else:
            print('Insufficient funds: Charging a $5 fee\n')
            self.balance -= amount
        return self

    def display_account_info(self):
        print(
            f'Balance: ${self.balance}\nInterest Rate: %{self.int_rate * 100}\n')
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self

    @classmethod
    def display_all_account_info(cls):
        print('All Accounts:\n')
        counter = 1
        for account in cls.all_accounts:
            print(
                f'Account #: 00000{counter}\nBalance: ${account.balance}\nInterest Rate: %{account.int_rate * 100}\n')
            counter += 1


account1 = BankAccount(0.06, 2000)
account2 = BankAccount(0.12, 50000)

account1.deposit(1000).deposit(2400).deposit(1200).withdraw(
    600).yield_interest().display_account_info()

account2.deposit(4000).deposit(2300).withdraw(200).withdraw(200).withdraw(
    200).withdraw(200).yield_interest().display_account_info()

BankAccount.display_all_account_info()
