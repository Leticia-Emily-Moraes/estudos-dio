package getstarted;

import java.util.Scanner; // Importa a classe Scanner para entrada de dados

public class OperadoresAtribuicaoELogicos {
    public static void main(String[] args) {
        // Cria um objeto Scanner para ler a entrada do usuário
        Scanner scanner = new Scanner(System.in);

        // Pergunta ao usuário quanto é 2 + 2
        System.out.println("Quanto é 2 + 2?");
        int result = scanner.nextInt(); // Lê um número inteiro digitado pelo usuário

        // Verifica se o resultado digitado pelo usuário é igual a 4
        boolean isRight = result == 4;

        // Exibe se a resposta está correta ou não
        System.out.printf("O resultado é 4, você acertou? (%b) \n", isRight);

        // Pergunta ao usuário sua idade
        System.out.println("Quantos anos você tem?");
        int age = scanner.nextInt(); // Lê a idade informada pelo usuário

        // Pergunta ao usuário se ele é emancipado (true ou false)
        System.out.println("Você é emancipado? (true/false)");
        boolean isEmancipated = scanner.nextBoolean(); // Lê um valor booleano (true ou false)

        // Verifica se o usuário pode dirigir:
        // - Se tiver 18 anos ou mais, pode dirigir
        // - Se for emancipado e tiver pelo menos 16 anos, também pode dirigir
        boolean canDrive = age >= 18 || (isEmancipated && age >= 16);

        // Exibe se o usuário pode dirigir
        System.out.printf("Você pode dirigir? (%b)\n\n", canDrive);

        //tabela de comparacões 

        System.out.printf("true && true = %s \n", true && true);
        System.out.printf("true && false = %s \n", true && false);
        System.out.printf("false && true = %s \n", false && true);
        System.out.printf("false && false = %s \n", false && false);
        System.out.println("===================================");
        System.out.printf("true || true = %s \n", true || true);
        System.out.printf("true || false = %s \n", true || false);
        System.out.printf("false || true = %s \n", false || true);
        System.out.printf("false || false = %s \n", false || false);
        System.out.println("===================================");
        System.out.printf("!true = %s \n", !true);
        System.out.printf("!false = %s \n", !false);

        // Fecha o Scanner para evitar vazamento de recursos
        scanner.close();
    }
}
