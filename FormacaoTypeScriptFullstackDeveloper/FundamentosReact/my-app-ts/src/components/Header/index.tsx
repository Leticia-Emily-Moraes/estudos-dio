import React from "react";
import { Box, Image } from "./style";
import DioLogo from "../../assets/DioLogo.png";

export const Header = () => {
	return (
		<Box>
			<Image
				src={DioLogo}
				alt=""
			/>
			<h1>Dio Bank</h1>
		</Box>
	);
};
