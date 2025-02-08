public class Account {
    private final String name;
    private int balance;
    private int overdraftLimit;
    private int overdraftUsed;

    public Account(String name, int initialDeposit) {
        this.name = name;
        this.balance = initialDeposit;
        this.overdraftUsed = 0;

        if (initialDeposit <= 500) {
            this.overdraftLimit = 50;
        } else {
            this.overdraftLimit = initialDeposit / 2;
        }

    }

    public int getBalance() {
        return balance;
    }

    public int getOverdraftLimit() {
        return overdraftLimit;
    }

    public boolean isUsingOverdraft() {
        return overdraftUsed > 0;
    }

    public void deposit(int amount) {
        if (amount >= 0) {
            if (overdraftUsed > 0) {
                int overdraftFee = (int) (overdraftUsed * 0.2);
                int todalDebt = overdraftUsed + overdraftFee;

                if (amount >= todalDebt) {
                    amount -= todalDebt;
                    overdraftUsed = 0;
                } else {
                    overdraftUsed -= amount;
                    return;
                }
            }
            balance += amount;
            System.out.println("Deposit made successfully");
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    public void withdrawal(int amount) {
        if (amount >= 0) {
            if (amount <= balance) {
                balance -= amount;
            } else {
                int totalAvailable = balance + (overdraftLimit - overdraftUsed);
                if (amount <= totalAvailable) {
                    overdraftUsed += (amount - balance);
                    balance = 0;
                }else{
                    System.out.println("Withdrawal invalid. Amount exceeds available limit");
                    return;
                }
            }
            System.out.println("withdrawal made successfully");
        } else {
            System.out.println("Invalid amount for withdrawal");
        }
    }

    public void payBill(int amount){
        System.out.println("Paying a bill of R$" + amount);
        withdrawal(amount);
    }

    public void accountInfo(){
        System.out.println("Name: " + name);
        System.out.println("Balance: R$" + balance);
        System.out.println("Special Check available: R$" + (overdraftLimit - overdraftUsed));
        System.out.println("Using Special Check? " + (isUsingOverdraft() ? "Yes" : "No"));
    }

    

}
