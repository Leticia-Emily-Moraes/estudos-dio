package main;

import java.util.Scanner;

public class Exercicios {
    public static void main(String[] args) {
        //Exercicio 1
        var scan = new Scanner(System.in);
        System.out.println("Escolha um numero para a tabuada: ");
        var num = scan.nextInt();
        for (int i = 0; i <= 10; i++) {
            
            System.out.printf("%s X %s = %s\n",num, i, num * i );
        }
    }
}
