import * as React from "react";

interface ICard {
	id: number;
	textCard: string;
}

export const Card = ({ id, textCard }: ICard) => {
	return (
		<div>
			<h1>Card {id}</h1>
			<p>{textCard}</p>
		</div>
	);
};
