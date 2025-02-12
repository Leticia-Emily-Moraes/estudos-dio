import java.util.Scanner;

public class ClassCar {
    private static final Scanner scan = new Scanner(System.in);

    private final String nameCar;
    private boolean isOn;
    private int speed;
    private int gear;
    private int speedLimit;
    private int minSpeed;

    public ClassCar(String nameCar) {
        this.nameCar = nameCar;
        this.isOn = false;
        this.speed = 0;
        this.gear = 0;
    }

    public int getSpeed() {
        return speed;
    }
    public void turnToTheLeft() {
        if (!isOn) {
            System.out.println("the car needs to be running");
            return;
        }

        if(speed < 1){
            System.out.println("the car is too slow to turn");
            return;
        }

        if(speed > 40){
            System.out.println("the car is too fast to turn");
            return;
        }

        System.out.println("The car turned to the left");

    }

    public void turnToTheRight() {
        if (!isOn) {
            System.out.println("the car needs to be running");
            return;
        }

        if(speed < 1){
            System.out.println("the car is too slow to turn");
            return;
        }

        if(speed > 40){
            System.out.println("the car is too fast to turn");
            return;
        }

        System.out.println("The car turned to the right");

    }

    public void startCar() {
        if (isOn) {
            System.out.println("The car is already started");
            return;
        }

        if (speed != 0) {
            System.out.println("The car must be at speed 0 to start");
            return;
        }

        if (gear != 0) {
            System.out.println("The car must be in neutral to start");
            return;
        }

        isOn = true;
        System.out.println("The car was started");
    }

    public void turnOffCar() {
        if (!isOn) {
            System.out.println("The car is already turned off");
            return;
        }

        if (speed != 0) {
            System.out.println("The car must be at speed 0 to turn off");
            return;
        }

        if (gear != 0) {
            System.out.println("The car must be in neutral to turn off");
            return;
        }

        isOn = false;
        System.out.println("The car was turned off");
    }

    public void accelerate() {
        if (!isOn) {
            System.out.println("The car needs to be running to accelerate");
            return;
        }

        if (gear == 0) {
            System.out.println("The car cannot accelerate in neutral");
            return;
        }

        if (speed + 1 > speedLimit) {
            System.out.println("To accelerate, change gear");
            return;
        }

        speed++;
        System.out.println("Speed increased to: " + speed + " km/h");
    }

    public void slowDown() {
        if (!isOn) {
            System.out.println("The car needs to be running to slowDown");
            return;
        }

        if (gear == 0) {
            System.out.println("The car cannot slow down in neutral");
            return;
        }

        if (speed - 1 < minSpeed) {
            System.out.println("To slow down, change gear");
            return;
        }

        speed--;
        System.out.println("Speed decreased to: " + speed + " km/h");
    }

    public void setSpeedLimit() {
        switch (gear) {
            case 0:
                speedLimit = 0;
                break;
            case 1:
                minSpeed = 0;
                speedLimit = 20;
                break;
            case 2:
                minSpeed = 21;
                speedLimit = 40;
                break;
            case 3:
                minSpeed = 41;
                speedLimit = 60;
                break;
            case 4:
                minSpeed = 61;
                speedLimit = 80;
                break;
            case 5:
                minSpeed = 81;
                speedLimit = 100;
                break;
            case 6:
                minSpeed = 101;
                speedLimit = 120;
                break;
            default:
                break;
        }
    }

    public void changeGear() {
        if (!isOn) {
            System.out.println("The car must be on to change gears");
            return;
        }

        if (gear == 1 && speed > 20) {
            System.out.println("Speed is too high for 1st gear.");
            return;
        } else if (gear == 2 && speed > 40) {
            System.out.println("Speed is too high for 2nd gear.");
            return;
        } else if (gear == 3 && speed > 60) {
            System.out.println("Speed is too high for 3rd gear.");
            return;
        } else if (gear == 4 && speed > 80) {
            System.out.println("Speed is too high for 4th gear.");
            return;
        } else if (gear == 5 && speed > 100) {
            System.out.println("Speed is too high for 5th gear.");
            return;
        } else if (gear == 6 && speed > 120) {
            System.out.println("Speed is too high for 6th gear.");
            return;
        }

        System.out.println("Do you want to upshift (+) or downshift (-)? ");
        String choice = scan.nextLine();

        if (choice.equals("+")) {
            if (gear < 6) {
                gear++;
                setSpeedLimit();
                System.out.println("Gear changed up to: " + gear);
            } else {
                System.out.println("You are already in the highest gear.");
            }
        } else if ((choice.equals("-"))) {
            if (gear > 0) {
                gear--;
                setSpeedLimit(); 
                System.out.println("Gear changed down to: " + gear);
            } else {
                System.out.println("You are already in neutral.");
            }
        } else {
            System.out.println("Invalid option! Use '+' to upshift or '-' to downshift.");
        }
    }

}
