package main.java.main;

import java.time.OffsetDateTime;

public class Person {
    private final String name;
    private int age;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public Person(String name) {
        this.name = name;
        this.age = 1;
    }

    private int lastYearAgeInc = OffsetDateTime.now().getYear();

    public void incAge() {
        if (this.lastYearAgeInc >= OffsetDateTime.now().getYear()) {
            return;
        } else {
            this.age += 1;
            this.lastYearAgeInc = OffsetDateTime.now().getYear();
        }
    }
}
