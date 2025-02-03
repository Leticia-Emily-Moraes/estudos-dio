package main.java.main;

public class Main {
    public static void main(String[] args) {
        var male = new Person("João");
        var female = new Person("Leticia");

        System.out.println("male name " + male.getName() + " and age " + male.getAge());
        System.out.println("female name " + female.getName() + " and age " + female.getAge());
    }
}