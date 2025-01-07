import React from "react";
import { Box, Image } from "./style";
import copyright from "../../assets/copyright.png";

export const Footer = () => {
	return (
		<Box>
			<p>Todos os direitos resevados</p>
			<Image src={copyright} />
		</Box>
	);
};
