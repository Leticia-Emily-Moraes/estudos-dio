import java.util.Scanner;

public class Car {
    private static final Scanner scan = new Scanner(System.in);
    private static ClassCar car;

    public static void main(String[] args) {
        startCar();
        displayMenu();
        scan.close();
    }

    private static void startCar() {
        System.out.print("Write the name of the car: ");
        String name = scan.nextLine();

        car = new ClassCar(name);
    }

    private static void displayMenu() {
        int option;
        do {
            System.out.println("\n--- MENU ---");
            System.out.println("1. Turn on the car");
            System.out.println("2. Turn off the car");
            System.out.println("3. Speed up the car");
            System.out.println("4. Slow down the car");
            System.out.println("5. Turn the car to the right");
            System.out.println("6. Turn the car to the left");
            System.out.println("7. Check speed");
            System.out.println("8. Change gear");
            System.out.println("9. View car information");
            System.out.println("0. Exit");
            System.out.print("Choose an option: ");
            option = scan.nextInt();

            processOption(option);
        } while (option != 0);
        System.out.println("Leaving... Until next trip!");
    }

    private static void processOption(int option) {
        switch (option) {
            case 0:
                break;
            case 1:
                car.startCar();
                break;
            case 2:
                car.turnOffCar();
                break;
            case 3:
                car.accelerate();
                break;
            case 4:
                car.slowDown();
                break;
            case 5:
                car.turnToTheRight();
                break;
            case 6:
                car.turnToTheLeft();
                break;
            case 7:
                System.out.println("The speed of the car is: " + car.getSpeed());
                break;
            case 8:
                car.changeGear();
                break;
            case 9:
                car.carInfo();
                break;

            default:
                System.out.println("Invalid option. Please try again.");
                break;
        }
    }

}
