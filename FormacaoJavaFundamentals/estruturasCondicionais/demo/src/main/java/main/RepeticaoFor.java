package main;

import java.util.Scanner;

public class RepeticaoFor {
    public static void main(String[] args) {
        var scan = new Scanner(System.in);

        for (int i = 0; i <= 100; i++) {
            System.out.println("Digite um nome: ");
            var name = scan.next();

            if (name.equalsIgnoreCase("exit"))
                break;

            System.out.println(name);
        }

        System.out.println("Escolha um numero para a tabuada: ");
        var num = scan.nextInt();
        for (int i = 0; i <= 10; i++) {
            
            System.out.printf("%s X %s = %s\n",num, i, num * i );
        }
    }
}
