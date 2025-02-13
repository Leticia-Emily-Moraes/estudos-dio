import java.util.Scanner;

class BathMachine {
    private static final Scanner scan = new Scanner(System.in);
    private int waterLevel;
    private int shampooLevel;
    private boolean petInBath;
    private boolean petNotCleaned;

    public BathMachine() {
        this.waterLevel = 30;
        this.shampooLevel = 10;
        this.petInBath = false;
        this.petNotCleaned = false;
    }

    public void refillWater() {
        if (waterLevel + 2 <= 30) {
            waterLevel += 2;
            System.out.println("Refilled 2 liters of water. Current water level: " + waterLevel + " liters.");
        } else {
            System.out.println("The machine is already full of water!");
        }
    }

    public void refillShampoo() {
        if (shampooLevel + 2 <= 10) {
            shampooLevel += 2;
            System.out.println("Refilled 2 liters of shampoo. Current shampoo level: " + shampooLevel + " liters.");
        } else {
            System.out.println("The machine is already full of shampoo!");
        }
    }

    public void checkWaterLevel() {
        System.out.println("Current water level: " + waterLevel + " liters.");
    }

    public void checkShampooLevel() {
        System.out.println("Current shampoo level: " + shampooLevel + " liters.");
    }

    public void placePetInMachine() {
        if (petInBath) {
            System.out.println("There is already a pet in the machine. Remove the pet before placing another one.");
        } else if (waterLevel < 10 || shampooLevel < 2) {
            System.out.println("Not enough water or shampoo to bath the pet.");
        } else {
            petInBath = true;
            petNotCleaned = true;
            waterLevel -= 10;
            shampooLevel -= 2;
            System.out.println("Pet placed in the machine. Bath in progress.");
        }
    }

    public void removePetFromMachine() {
        if (!petInBath) {
            System.out.println("There is no pet in the machine.");
        } else {
            if (petNotCleaned) {
                cleanMachine();
                System.out.println("The pet was removed without being cleaned. The machine has been cleaned for the next use.");
            }
            petInBath = false;
            petNotCleaned = false;
            System.out.println("Pet removed from the machine.");
        }
    }

    public void cleanMachine() {
        if (petInBath) {
            System.out.println("The machine cannot be cleaned while there is a pet in it.");
        } else {
            waterLevel -= 3;  
            shampooLevel -= 1;
            System.out.println("Machine cleaned. Water and shampoo levels adjusted: " + waterLevel + " liters of water and " + shampooLevel + " liters of shampoo.");
        }
    }

    public void checkPetInBath() {
        if (petInBath) {
            System.out.println("There is a pet in the bath.");
        } else {
            System.out.println("There is no pet in the bath.");
        }
    }
}