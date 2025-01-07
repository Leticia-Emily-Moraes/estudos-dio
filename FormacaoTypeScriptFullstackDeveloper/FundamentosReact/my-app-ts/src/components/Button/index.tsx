import React from "react";
import { ButtonStyle } from "./style";

interface InterfaceButton {
	title: string;
	onClick: () => void;
}

export const Button = ({ title, onClick }: InterfaceButton) => {
	return (
		<ButtonStyle onClick={onClick}>
			<strong>{title}</strong>
		</ButtonStyle>
	);
};
