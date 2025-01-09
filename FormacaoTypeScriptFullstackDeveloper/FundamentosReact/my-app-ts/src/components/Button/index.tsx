import * as React from "react";
import { ButtonStyle } from "./style";

interface InterfaceButton {
	title: string;
	onClick: React.MouseEventHandler;
}

export const Button = ({ title, onClick }: InterfaceButton) => {
	return (
		<ButtonStyle onClick={onClick}>
			<strong>{title}</strong>
		</ButtonStyle>
	);
};
