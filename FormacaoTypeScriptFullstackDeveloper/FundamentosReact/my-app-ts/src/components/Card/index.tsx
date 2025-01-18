import * as React from "react";
import { Box, Input } from "./style";
import { Button } from "../Button";
import { login } from "../../services/login";
import { api } from "../../api/api";

export const Card = () => {
	interface IUserData {
		email: string;
		password: string;
		name: string;
	}

	const [email, setEmail] = React.useState<string>("");
	const [userData, setUserData] = React.useState<null | IUserData>();

	React.useEffect(() => {
		const getData = async () => {
			const data: any | IUserData = await api;
			setUserData(data);
		};

		getData();
	}, []);
	return (
		<Box>
			<h1>Faça o login</h1>
			<Input
				type="email"
				placeholder="Email"
				onChange={(event) => {
					setEmail(event.target.value);
				}}
			/>
			<Input
				type="password"
				placeholder="Senha"
			/>
			<Button
				onClick={() => {
					login(email);
				}}
				title={"Entrar"}
			/>
		</Box>
	);
};
