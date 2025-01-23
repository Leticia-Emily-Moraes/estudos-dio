package getstarted;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //New comentário
        var scanner = new Scanner(System.in);
        System.out.println("Olá, informe o seu nome: ");
        var name = scanner.next();
        System.out.println("informe o sua idade: ");
        var age = scanner.nextInt();
        System.out.println("Olá, " + name + " de " + age + " anos.");
        System.out.printf("Olá, %s de %s anos.", name, age);
    }
}