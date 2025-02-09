import java.util.Scanner;

public class BankApp {
    private static final Scanner scan = new Scanner(System.in);
    private static Account account;

    public static void main(String[] args) {
        startAccount();
        displayMenu();
        scan.close();
    }

    private static void startAccount() {
        System.out.print("Enter your name: ");
        String name = scan.nextLine();

        System.out.print("Enter the initial deposit amount: ");
        int initialDeposit = scan.nextInt();

        account = new Account(name, initialDeposit);
    }

    private static void displayMenu() {
        int option;
        do {
            System.out.println("\n--- MENU ---");
            System.out.println("1. Check balance");
            System.out.println("2. Consult Special check");
            System.out.println("3. Deposit money");
            System.out.println("4. Withdraw money");
            System.out.println("5. Pay bill");
            System.out.println("6. Check if you are using a special check");
            System.out.println("7. View account information");
            System.out.println("0. Exit");
            System.out.print("Choose an option: ");
            option = scan.nextInt();

            processarOpcao(option);
        } while (option != 0);

        System.out.println("Leaving... Thank you for using our system!");
    }

    private static void processarOpcao(int option) {
        switch (option) {
            case 1:
                System.out.println("Your balance is: R$" + account.getBalance());
                break;
            case 2:
                System.out.println("You limit for Special Check is: R$" + account.getOverdraftLimit());
                break;
            case 3:
                System.out.print("Enter the amount to deposit: ");
                int depositAmount = scan.nextInt();
                account.deposit(depositAmount);
                break;
            case 4:
                System.out.print("Enter the withdrawal amount: ");
                int withdrawalAmount = scan.nextInt();
                account.withdrawal(withdrawalAmount);
                break;
            case 5:
                System.out.print("Enter the bill amount: ");
                int billAmount = scan.nextInt();
                account.payBill(billAmount);
                break;
            case 6:
                System.out.println("Using Special Check? " + (account.isUsingOverdraft() ? "Yes" : "No"));
                break;
            case 7:
                account.accountInfo();
                break;
            case 0:
                break;
            default:
                System.out.println("Invalid option. Please try again.");
                break;
        }
    }
}
