# **Banco Digital em Java** 🏦  

Este é um sistema bancário simples desenvolvido em **Java** que permite ao usuário criar uma conta e realizar operações básicas, como:  

✅ **Consultar saldo**  
✅ **Consultar cheque especial**  
✅ **Depositar dinheiro**  
✅ **Sacar dinheiro**  
✅ **Pagar boletos**  
✅ **Verificar uso do cheque especial**  

O sistema também conta com um **menu interativo** que permite ao usuário navegar pelas opções facilmente.  

---

## **📌 Funcionalidades**  

- **Criação de Conta**: O usuário insere seu nome e um valor inicial para definir o saldo da conta e o limite do cheque especial.  
- **Depósito**: Adiciona dinheiro à conta e, se houver saldo negativo, cobre automaticamente o valor devido.  
- **Saque**: Permite retirar dinheiro do saldo disponível, incluindo o cheque especial, se necessário.  
- **Pagamento de Boletos**: Realiza pagamentos descontando diretamente do saldo.  
- **Cheque Especial**: Se o saldo acabar, a conta pode utilizar um limite extra (com cobrança de taxa).  

### **💰 Regras do Cheque Especial**  

🔹 Se o depósito inicial for **R$500 ou menos**, o cheque especial será de **R$50**.  
🔹 Se o depósito inicial for **maior que R$500**, o cheque especial será **50% do valor depositado**.  
🔹 Caso o cheque especial seja usado, será cobrada uma **taxa de 20%** sobre o valor utilizado, assim que possível.  

---

## **🛠️ Tecnologias Utilizadas**  

- **Java**  
- **Scanner (Entrada de dados do usuário)**  

---

## **📂 Estrutura do Projeto**  

```
📦 BancoDigital
 ┣ 📜 Account.java          # Classe da conta bancária
 ┣ 📜 BankApp.java          # Classe principal (menu interativo)
 ┗ 📜 README.md             # Documentação do projeto
```

---

## **🚀 Como Executar**  

### **1️⃣ Clonar o Repositório**
```bash
git clone https://github.com/seu-usuario/banco-digital-java.git
cd banco-digital-java
```

### **2️⃣ Compilar o Código**
```bash
javac BankApp.java
```

### **3️⃣ Executar o Programa**
```bash
java BankApp
```

---

## **🖥️ Exemplo de Uso**  

```plaintext
Digite seu nome: Leticia  
Digite o valor do depósito inicial: 700  

--- MENU ---
1. Consultar saldo  
2. Consultar cheque especial  
3. Depositar dinheiro  
4. Sacar dinheiro  
5. Pagar boleto  
6. Verificar se está usando cheque especial  
7. Exibir informações da conta  
0. Sair  
Escolha uma opção: 1  

Seu saldo é: R$700
```

---

## **📌 Melhorias Futuras**  

🚀 Implementar persistência dos dados para salvar contas no banco de dados ou em arquivos.  
📲 Criar uma interface gráfica para melhorar a usabilidade.  

---

## **📝 Autor**  

👩‍💻 Desenvolvido por [Leticia Moraes](https://github.com/Leticia-Emily-Moraes)  

Se gostou do projeto, ⭐ deixe um star no repositório! 😊🚀  
