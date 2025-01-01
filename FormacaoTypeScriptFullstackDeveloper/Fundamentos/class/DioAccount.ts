export abstract class DioAccount {
	private name: string;
	accountNumber: number;
	balance: number = 0;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	setName = (newName: string) => {
		this.name = newName;
		console.log("New name saved");
	};

	getName = (): string => {
		return this.name;
	};

	deposit = (): void => {
		console.log("Você depositou");
	};

	withdraw = (): void => {
		console.log("Você sacou");
	};
	getBalance = (): void => {
		console.log(this.balance);
	};
}
