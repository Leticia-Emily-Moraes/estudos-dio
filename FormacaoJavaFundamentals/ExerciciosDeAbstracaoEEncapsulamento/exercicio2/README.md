# **Simulador de Carro em Java** 🚗

Este é um sistema simples desenvolvido em Java para simular o controle de um carro. O usuário pode realizar operações básicas, como ligar o carro, acelerar, desacelerar, trocar marchas e virar para a direita ou esquerda.

✅ **Ligar o carro**  
✅ **Desligar o carro**  
✅ **Acelerar o carro**  
✅ **Diminuir a velocidade**  
✅ **Trocar marchas**  
✅ **Virar o carro para a direita ou para a esquerda**  
✅ **Consultar a velocidade do carro**  
✅ **Exibir informações do carro**

O sistema conta com um **menu interativo** que permite ao usuário navegar pelas opções facilmente.

## 📌 **Funcionalidades**

- **Ligar o carro**: O carro só pode ser ligado se estiver em ponto morto e com a velocidade igual a 0.
- **Desligar o carro**: O carro só pode ser desligado quando estiver em ponto morto e com a velocidade igual a 0.
- **Acelerar**: Acelera o carro em 1 km/h, respeitando a marcha e o limite de velocidade.
- **Diminuir a velocidade**: Diminui a velocidade em 1 km/h, verificando a marcha e as condições necessárias.
- **Trocar marchas**: O carro pode subir ou descer marchas, com restrições de velocidade para cada marcha.
- **Virar à esquerda/direita**: Permite virar o carro, desde que a velocidade esteja entre 1 km/h e 40 km/h.
- **Consultar a velocidade**: Exibe a velocidade atual do carro.
- **Exibir informações do carro**: Exibe o nome, estado (ligado ou desligado), velocidade e marcha atual do carro.

### 🚗 **Regras de Marchas e Limites de Velocidade**

- **Marcha 0**: Ponto morto, velocidade 0.
- **Marcha 1**: Velocidade de 0 a 20 km/h.
- **Marcha 2**: Velocidade de 21 a 40 km/h.
- **Marcha 3**: Velocidade de 41 a 60 km/h.
- **Marcha 4**: Velocidade de 61 a 80 km/h.
- **Marcha 5**: Velocidade de 81 a 100 km/h.
- **Marcha 6**: Velocidade de 101 a 120 km/h.

## 🛠️ **Tecnologias Utilizadas**

- **Java**
- **Scanner** (Entrada de dados do usuário)

---

## 📂 **Estrutura do Projeto**

```
📦 ControleDeCarro  
 ┣ 📜 Car.java              # Classe principal que gerencia o menu e interações com o usuário  
 ┣ 📜 ClassCar.java         # Classe que representa o carro e contém os métodos de controle  
 ┗ 📜 README.md             # Documentação do projeto  
```

## 🚀 **Como Executar**

### 1️⃣ **Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/controle-de-carro-java.git
cd controle-de-carro-java
```

### 2️⃣ **Compilar o Código**

```bash
javac Car.java ClassCar.java
```

### 3️⃣**Executar o Programa**

```bash
java Car
```

## 🖥️ **Exemplo de Uso**

```plaintext
Write the name of the car: Meu Carro

--- MENU ---
1. Turn on the car  
2. Turn off the car  
3. Speed up the car  
4. Slow down the car  
5. Turn the car to the right  
6. Turn the car to the left  
7. Check speed  
8. Change gear  
9. View car information  
0. Exit  
Choose an option: 1  

The car was started

--- MENU ---
1. Turn on the car  
2. Turn off the car  
3. Speed up the car  
4. Slow down the car  
5. Turn the car to the right  
6. Turn the car to the left  
7. Check speed  
8. Change gear  
9. View car information  
0. Exit  
Choose an option: 3  

Speed increased to: 1 km/h

--- MENU ---
1. Turn on the car  
2. Turn off the car  
3. Speed up the car  
4. Slow down the car  
5. Turn the car to the right  
6. Turn the car to the left  
7. Check speed  
8. Change gear  
9. View car information  
0. Exit  
Choose an option: 5  

The car turned to the right

--- MENU ---
1. Turn on the car  
2. Turn off the car  
3. Speed up the car  
4. Slow down the car  
5. Turn the car to the right  
6. Turn the car to the left  
7. Check speed  
8. Change gear  
9. View car information  
0. Exit  
Choose an option: 0  

Leaving... Until next trip!
```
---

## 📌 **Melhorias Futuras**

🚀 Implementar persistência para salvar o estado do carro e preferências do usuário.
📲 Criar uma interface gráfica para melhorar a experiência do usuário.

## **📝 Autor**

👩‍💻 Desenvolvido por [Leticia Moraes](https://github.com/Leticia-Emily-Moraes)

Se gostou do projeto, ⭐ deixe um star no repositório! 😊🚀
