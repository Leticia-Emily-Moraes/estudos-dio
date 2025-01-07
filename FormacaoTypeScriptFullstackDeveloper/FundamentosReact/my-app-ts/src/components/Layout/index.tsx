import React from "react";
import { Header } from "../Header/index";
import { Footer } from "../Footer/index";

export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
