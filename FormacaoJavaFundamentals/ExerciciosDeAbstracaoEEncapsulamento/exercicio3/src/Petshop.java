import java.util.Scanner;

public class PetShop {
    private static final Scanner scan = new Scanner(System.in);
    private static BathMachine machine;

    public static void main(String[] args) {
        startMachine();
        displayMenu();
        scan.close();
    }

    private static void startMachine() {
        machine = new BathMachine();
    }

    private static void displayMenu() {
        int option;
        do {
            System.out.println("\n--- MENU ---");
            System.out.println("1. Refill with water");
            System.out.println("2. Refill with shampoo");
            System.out.println("3. Check water level");
            System.out.println("4. Check shampoo level");
            System.out.println("5. Place pet in the machine");
            System.out.println("6. Remove pet from the machine");
            System.out.println("7. Clean the machine");
            System.out.println("8. Check if there is a pet in the bath");
            System.out.println("0. Exit");
            System.out.print("Choose an option: ");
            option = scan.nextInt();

            processOption(option);
        } while (option != 0);
        System.out.println("Exiting... Until next time!");
    }

    private static void processOption(int option) {
        switch (option) {
            case 0:
                break;
            case 1:
                machine.refillWater();
                break;
            case 2:
                machine.refillShampoo();
                break;
            case 3:
                machine.checkWaterLevel();
                break;
            case 4:
                machine.checkShampooLevel();
                break;
            case 5:
                machine.placePetInMachine();
                break;
            case 6:
                machine.removePetFromMachine();
                break;
            case 7:
                machine.cleanMachine();
                break;
            case 8:
                machine.checkPetInBath();
                break;
            default:
                System.out.println("Invalid option. Please try again.");
                break;
        }
    }
}
