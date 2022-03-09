class User:
    def __init__(self, user, balance):
        self.user = user
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdrawal(self, amount):
        self.balance -= amount
        return self

    def display_user_balance(self):
        print(f'User: {self.user} \nBalance: {self.balance}\n')
        return self

    def transfer_money(self, other_user, amount):
        other_user.balance += amount
        self.balance -= amount
        return self


user1 = User('Mr. Meow Meow', 7777777)
user2 = User('Truck Freak',  2000)
user3 = User('Yusan', -16000)

user1.deposit(5000000).deposit(50000000).deposit(
    400000).withdrawal(20000).display_user_balance()

user2.deposit(1000).deposit(2000).withdrawal(
    50).withdrawal(50).display_user_balance()

user3.deposit(5).withdrawal(100).withdrawal(
    100).withdrawal(100).display_user_balance()

user1.transfer_money(user3, 1000000).display_user_balance()
user3.display_user_balance()
