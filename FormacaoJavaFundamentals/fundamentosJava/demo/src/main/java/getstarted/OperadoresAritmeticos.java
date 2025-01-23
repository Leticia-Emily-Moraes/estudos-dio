package getstarted;

import java.util.Scanner;

public class OperadoresAritmeticos { 
    public static void main(String[] args) {
        // Cria um objeto Scanner para ler entrada do usuário
        var scanner = new Scanner(System.in);

        // Solicita ao usuário o primeiro número e armazena como float
        System.out.println("Informe o primeiro número: ");
        var value1 = scanner.nextFloat();

        // Solicita ao usuário o segundo número e armazena como float
        System.out.println("Informe o segundo número: ");
        var value2 = scanner.nextFloat();

        // Realiza e exibe a soma dos números informados
        System.out.printf("%s + %s = %s \n", value1, value2, value1 + value2);

        // Realiza e exibe a subtração dos números informados
        System.out.printf("%s - %s = %s \n", value1, value2, value1 - value2);

        // Realiza e exibe a multiplicação dos números informados
        System.out.printf("%s * %s = %s \n", value1, value2, value1 * value2);

        // Realiza e exibe a divisão dos números informados
        System.out.printf("%s / %s = %s \n", value1, value2, value1 / value2);

        // Calcula e exibe a raiz quadrada dos números informados
        System.out.printf("Raiz quadrada de %s e de %s = %s e %s \n", 
            value1, value2, Math.sqrt(value1), Math.sqrt(value2));

        // Calcula e exibe a potência quadrada dos números informados
        System.out.printf("Potência quadrada de %s e de %s = %s e %s \n", 
            value1, value2, Math.pow(value1, 2), Math.pow(value2, 2));

        // Fecha o Scanner para evitar vazamento de recursos
        scanner.close();
    }
}
