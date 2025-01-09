import * as React from "react";
import { Box, Input } from "./style";
import { Button } from "../Button";
import { login } from "../../services/login";

export const Card = () => {
	const [email, setEmail] = React.useState('')
	return (
		<Box>
			<h1>Faça o login</h1>
			<Input
				type="email"
				placeholder="Email"
				onChange={(event) => {setEmail(event.target.value)}}
			/>
			<Input
				type="password"
				placeholder="Senha"
			/>
			<Button onClick={() => {login(email)}} title={"Entrar"}/>
		</Box>
	);
};
