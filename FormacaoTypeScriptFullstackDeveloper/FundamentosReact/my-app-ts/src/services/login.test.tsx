import { login } from "./login";

describe('login', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    const mockEmail = 'Lele@dio.com';

    beforeEach(() => {
        jest.clearAllMocks(); // Limpa o mock antes de cada teste
    });

    it('Deve exibir um alert com boas vindas, caso o email seja válido', async () => {
        await login(mockEmail); // Aguarda a execução da função assíncrona
        expect(mockAlert).toHaveBeenCalledWith(`Bem vinda ${mockEmail}!`);
    });

    it('Não deve exibir a mensagem de boas vindas sem o email', async () => {
        await login('email@invalido.com'); // Aguarda a execução da função assíncrona
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!');
    });

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com'); // Aguarda a execução da função assíncrona
        expect(mockAlert).toHaveBeenCalledWith('Email inválido');
    });
});
