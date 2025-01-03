import React from "react";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
