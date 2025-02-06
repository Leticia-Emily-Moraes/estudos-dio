import main.PersonRecord;

public class Records {
    public static void main(String[] args) {
        var PersonRecord = new PersonRecord("João", 18);
        System.out.println(PersonRecord);
        System.out.println(PersonRecord.name());
   }
}
