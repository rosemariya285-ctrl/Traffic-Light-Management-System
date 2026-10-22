import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class TrafficLightQueueSystem {
    private static final Queue<String> vehicleQueue = new LinkedList<>();
    private static String signal = "RED";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;

        System.out.println("TRAFFIC LIGHT VEHICLE QUEUE MANAGEMENT SYSTEM");

        do {
            System.out.println("\nCurrent signal: " + signal);
            System.out.println("1. Add a vehicle (enqueue)");
            System.out.println("2. Turn GREEN and allow a vehicle to pass (dequeue)");
            System.out.println("3. View next vehicle (peek)");
            System.out.println("4. Display all waiting vehicles");
            System.out.println("5. Check whether queue is empty");
            System.out.println("6. Turn signal RED");
            System.out.println("0. Exit");
            System.out.print("Enter your choice: ");

            while (!scanner.hasNextInt()) {
                System.out.print("Enter a number from the menu: ");
                scanner.nextLine();
            }
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Enter vehicle number/name: ");
                    String vehicle = scanner.nextLine().trim();
                    if (vehicle.isEmpty()) {
                        System.out.println("Vehicle details cannot be empty.");
                    } else {
                        vehicleQueue.offer(vehicle);
                        System.out.println(vehicle + " added to the rear of the queue.");
                    }
                    break;
                case 2:
                    signal = "GREEN";
                    System.out.println("Signal is GREEN.");
                    if (vehicleQueue.isEmpty()) {
                        System.out.println("No vehicles are waiting.");
                    } else {
                        System.out.println(vehicleQueue.poll() + " passed the signal.");
                    }
                    break;
                case 3:
                    if (vehicleQueue.isEmpty()) {
                        System.out.println("Queue is empty; there is no next vehicle.");
                    } else {
                        System.out.println("Next vehicle: " + vehicleQueue.peek());
                    }
                    break;
                case 4:
                    if (vehicleQueue.isEmpty()) {
                        System.out.println("No vehicles are waiting.");
                    } else {
                        System.out.println("Waiting vehicles (front to rear):");
                        int position = 1;
                        for (String v : vehicleQueue) {
                            System.out.println(position++ + ". " + v);
                        }
                    }
                    break;
                case 5:
                    if (vehicleQueue.isEmpty()) {
                        System.out.println("Queue is empty.");
                    } else {
                        System.out.println("Queue is not empty. Waiting vehicles: "
                                + vehicleQueue.size());
                    }
                    break;
                case 6:
                    signal = "RED";
                    System.out.println("Signal is RED. Vehicles must wait.");
                    break;
                case 0:
                    System.out.println("Exiting the system. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        } while (choice != 0);

        scanner.close();
    }
}
