package main;

import java.util.Scanner;

public class Exercicios {
    public static void main(String[] args) {
        // Exercicio 1
        var scan = new Scanner(System.in);
        System.out.println("Escolha um numero para a tabuada: ");
        var num = scan.nextInt();
        for (int i = 0; i <= 10; i++) {

            System.out.printf("%s X %s = %s\n", num, i, num * i);
        }

        // exercicio 2
        System.out.println("Insira seu peso: ");
        var peso = scan.nextDouble();
        System.out.println("Insira sua altura: ");
        var altura = scan.nextDouble();
        var imc = peso / (altura * altura);

        System.out.printf("Seu IMC é: %.2f\n", imc);
        System.out.printf("Situação: ");

        if (imc < 18.5) {
            System.out.println("Você está abaixo do peso.");
        } else if (imc >= 18.5 && imc < 24.9) {
            System.out.println("Peso normal.");
        } else if (imc >= 25 && imc < 29.9) {
            System.out.println("Levemente acima do peso.");
        } else if (imc >= 30 && imc < 34.9) {
            System.out.println("Obesidade grau I.");
        } else if (imc >= 35 && imc < 39.9) {
            System.out.println("Obesidade grau II.");
        } else {
            System.out.println("Obesidade grau III (mórbida).");
        }

        //exercicio 3

        System.out.println("Digite um número:");
        var numMenor = scan.nextInt();
        System.out.println("Digite um número maior que o anterior:");
        var numMaior = scan.nextInt();

        scan.nextLine();

        System.out.println("voce quer ver os números pares ou impares: ");
        String escolha = scan.nextLine().trim().toLowerCase();

        if (escolha.equals("par")) {
            System.out.println("Números pares entre " + numMenor + " e " + numMaior + ":");
            for (int i = numMenor + 1; i < numMaior; i++) {
                if (i % 2 == 0) {
                    System.out.print(i + " ");
                }
            }
        } else if (escolha.equals("ímpar")) {
            System.out.println("Números ímpares entre " + numMenor + " e " + numMaior + ":");
            for (int i = numMenor + 1; i < numMaior; i++) {
                if (i % 2 != 0) {
                    System.out.print(i + " ");
                }
            }
        } else {
            System.out.println("Escolha inválida. Digite 'par' ou 'ímpar'.");
        }
        System.out.print("\n");

        //exercicio 4

        System.out.print("Digite o número inicial: ");
        int numInicial = scan.nextInt();

        while (true) {
            System.out.print("Digite um número (ou um número menor que o inicial para ignorar): ");
            int numTentativa = scan.nextInt();

            if (numTentativa < numInicial) {
                System.out.println("Número menor que o inicial, ignorando...");
                continue; 
            }

            if (numTentativa % numInicial != 0) {
                System.out.println("Número não divisível por " + numInicial + ". Encerrando...");
                break;
            }

            System.out.println("Número divisível por " + numInicial + ". Continuando...");
        }
    }
}
