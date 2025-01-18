import { api } from "../api/api";

export const login = async (email: string): Promise<void> => {
	const data: any = await api;
	if (email === data.email) {
		alert(`Bem vinda ${email}!`);

		return;
	} else {
		alert("Email inválido");
	}
};
