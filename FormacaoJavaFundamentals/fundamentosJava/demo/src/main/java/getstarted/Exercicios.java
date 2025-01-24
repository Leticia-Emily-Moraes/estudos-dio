package main.java.getstarted;

import java.util.Scanner;

public class Exercicios {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        // exercicio 1
        System.out.println("Olá, informe o seu nome: ");
        var name = scanner.next();
        System.out.println("informe o sua idade: ");
        var age = scanner.nextInt();
        System.out.println("Olá, " + name + " de " + age + " anos.");

        // exercicio 2
        System.out.println("Informe o tamanho do lado do quadrado: ");
        int lado = scanner.nextInt();
        System.out.printf("A área desse quadrado é %d \n", lado * lado);

        // exercicio 3
        System.out.println("Informe a largura do retângulo: ");
        int largura = scanner.nextInt();
        System.out.println("Informe a altura do retângulo: ");
        int altura = scanner.nextInt();
        System.out.printf("A área desse retângulo é %d \n", largura * altura);

        // exercicio 4
        // Solicita o nome e a idade da primeira pessoa
        System.out.println("(Pessoa 1) Olá, informe o seu nome: ");
        String name1 = scanner.next(); // Lê o nome da primeira pessoa
        System.out.println("(Pessoa 1) Informe a sua idade: ");
        int age1 = scanner.nextInt(); // Lê a idade da primeira pessoa

        // Solicita o nome e a idade da segunda pessoa
        System.out.println("(Pessoa 2) Olá, informe o seu nome: ");
        String name2 = scanner.next(); // Lê o nome da segunda pessoa
        System.out.println("(Pessoa 2) Informe a sua idade: ");
        int age2 = scanner.nextInt(); // Lê a idade da segunda pessoa

        // Calcula a diferença de idade usando Math.abs para garantir um valor positivo
        int diferenca = Math.abs(age1 - age2);

        // Exibe a diferença de idade entre as duas pessoas
        System.out.printf("A diferença de idade entre %s e %s é de %d anos.\n", name1, name2, diferenca);

    }
}
