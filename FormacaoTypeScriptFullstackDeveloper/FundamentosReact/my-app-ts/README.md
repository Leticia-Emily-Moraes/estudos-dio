# Dio Bank - Página de Login

#### **Descrição**

O **Dio Bank - Página de Login** é um projeto desenvolvido utilizando **React** e **TypeScript**. O objetivo é criar uma interface de login simples e funcional, permitindo que os usuários façam login e recebam uma mensagem de boas-vindas após a autenticação.

Este projeto foi criado como parte da **Formação TypeScript Fullstack Developer** da **DIO**, com foco em componentes React e testes unitários.

---

### **Funcionalidades**

-   **Formulário de Login**
    -   Interface simples para o usuário inserir suas credenciais.
    -   Validação básica do formulário (exibindo uma mensagem de boas-vindas ao clicar no botão).
-   **Botão de Login**
    -   O botão de login aciona a função de boas-vindas ao ser clicado.
    -   A função de boas-vindas exibe um `alert` com a mensagem "Bem vinda!".
-   **Componente Card**
    -   Refatoração do componente `Card` para encapsular o formulário de login, evitando a repetição de código na página inicial.

---

### **Tecnologias Utilizadas**

-   **React**: Biblioteca para construção de interfaces de usuário.
-   **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
-   **Jest**: Ferramenta para testes unitários.
-   **Styled Components (opcional)**: Para estilização dos componentes.
-   **React Testing Library**: Para realizar os testes dos componentes.

---

### **Como Rodar o Projeto**

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/dio-bank-login.git
cd dio-bank-login
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm start
```

O projeto estará disponível em http://localhost:3000.

#### Estrutura de Componentes

1. **LoginPage**

-   Componente principal que contém a lógica para renderizar o formulário de login.

2. **Card**

-   Componente que encapsula o formulário de login, oferecendo uma estrutura reutilizável.
-   Formulário contém os campos de e-mail e senha.

3. **Button**

- Componente de botão personalizado, que aceita a função onClick como uma prop.

4. **Boas-vindas**

-   Função que exibe uma mensagem de boas-vindas via alert ao clicar no botão de login.

#### Exemplo de Uso

```tsx
import React from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { login } from "./functions/login";

const LoginPage = () => (
	<div>
		<Card>
			<form>
				<input
					type="email"
					placeholder="E-mail"
				/>
				<input
					type="password"
					placeholder="Senha"
				/>
				<Button
					title="Entrar"
					onClick={login}
				/>
			</form>
		</Card>
	</div>
);

export default LoginPage;
```

##### Função de Boas-vindas

A função login exibe um alert com a mensagem "Bem vinda!" quando o botão de login é clicado:

```tsx
export const login = (): void => {
	alert("Bem vinda!");
};
```

#### Testes

##### Teste Unitário para a Função login

O teste verifica se o alert é chamado com a mensagem "Bem vinda!" ao clicar no botão de login:

```tsx
import { login } from "./functions/login";

describe("login", () => {
	const mockAlert = jest.fn();
	window.alert = mockAlert; // Mock do alert

	it("Deve exibir um alert com boas-vindas", () => {
		login(); // Chamando a função
		expect(mockAlert).toHaveBeenCalledWith("Bem vinda!"); // Verificando se o alert foi chamado corretamente
	});
});
```

### **Autor**

Projeto baseado no aprendizado fornecido por [Nathally Souza](https://github.com/nathyts). Adaptações e melhorias realizadas por [Leticia Moraes](https://github.com/leticia-emily-moraes), como parte da **Formação TypeScript Fullstack Developer** da **DIO**.

---

### **Licença**

Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para utilizá-lo e contribuir!
