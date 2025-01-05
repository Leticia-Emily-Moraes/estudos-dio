import React from "react";
import { Geral, Box, Input, Button } from "./style.tsx";

function App() {
	return (
		<Geral>
			<Box>
				<h1>Faça o login</h1>
				<Input type="email" placeholder="Email"/>
				<Input type="password" placeholder="Senha"/>
				<Button><b>Entrar</b></Button>
			</Box>
		</Geral>
	);
}

export default App;
