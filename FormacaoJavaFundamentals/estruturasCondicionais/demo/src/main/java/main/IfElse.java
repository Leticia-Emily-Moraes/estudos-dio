package main;

import java.util.Scanner;

public class IfElse {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in); // Scanner para entrada de dados

        // Solicita o nome do usuário
        System.out.println("Informe seu nome: ");
        String name = scan.next();

        // Solicita a idade do usuário
        System.out.println("Informe sua idade: ");
        int age = scan.nextInt();

        // Verifica se a pessoa pode dirigir
        if (age >= 18) {
            System.out.printf("%s, você tem %d anos, então pode dirigir.%n", name, age);
        } else {
            System.out.printf("%s, você tem %d anos, então não pode dirigir.%n", name, age);
        }

        scan.close(); // Fecha o Scanner para evitar vazamento de memória
    }
}
