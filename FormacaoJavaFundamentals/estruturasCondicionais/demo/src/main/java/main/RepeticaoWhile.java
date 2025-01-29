package main;

import java.util.Scanner;

public class RepeticaoWhile {
    public static void main(String[] args) {
        var scan = new Scanner(System.in);
        var name = "";
        while(!name.equalsIgnoreCase("exit")){
            System.out.println("1 - Insira um nome: ");
            name = scan.next();
        }


        name = "";
        do{
            System.out.println("2 - Insira um nome: ");
            name = scan.next();
        }while(!name.equalsIgnoreCase("exit"));
    }
}
