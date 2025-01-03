import React from "react";
import { Card } from "./components/Card.tsx";
import { Layout } from "./components/Layout.tsx";

function App() {
	return (
		<Layout>
			<Card
				id={1}
				textCard="Ola ola 1"
			/>
			<Card
				id={2}
				textCard="Ola ola 2"
			/>
			<Card
				id={3}
				textCard="Ola ola 3"
			/>
		</Layout>
	);
}

export default App;
