const user = {
	name: "Nath",
	age: 32,
	showName() {
		console.log(this.name);
	},
};

const user2 = {
	name: "João",
	age: 26,
	showName() {
		console.log(this.name);
	},
};

class User {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		(this.name = name), (this.age = age);
	}

	showName = () => {
		console.log(this.name);
	};
} // mais recomendado

const userClass: User = new User("Nath", 32);
userClass.showName();
