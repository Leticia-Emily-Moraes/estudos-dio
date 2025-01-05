import React from "react";
import { Header } from "../Header/index.tsx";
import { Footer } from "../Footer/Footer.tsx";

export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
