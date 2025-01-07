import React from "react";
import { Geral } from "./style";
import { Layout } from "./components/Layout";
import { Card } from "./components/Card";

function App() {
	return (
		<Layout>
			<Geral>
				<Card></Card>
			</Geral>
		</Layout>
	);
}

export default App;
