import * as React from "react";
import { Box, Input } from "./style";
import { Button } from "../Button";
import { login } from "../../services/login";

export const Card = () => {
	return (
		<Box>
			<h1>Faça o login</h1>
			<Input
				type="email"
				placeholder="Email"
			/>
			<Input
				type="password"
				placeholder="Senha"
			/>
			<Button onClick={login} title={"Entrar"}/>
		</Box>
	);
};
