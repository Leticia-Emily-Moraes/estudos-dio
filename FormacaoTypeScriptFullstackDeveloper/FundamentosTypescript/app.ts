var a = "a"; //global, alterável em qualquer lugar de execução, pouco usado no mercado
let b: string = "b"; //pode ser mudado durante o script
const c = "c"; //variável que não muda, não pode ser sobrescrito

let s: string = "b";
let n: number = 2;
let x: boolean = true;
let m: any = 2; //todos os tipos

interface Pessoa {
	nome: string; //obrigatório
	idade: number; //obrigatório
	profissao?: string; //opcional
}

const pessoa: Pessoa = {
	nome: "Lele",
	idade: 18,
};

const pessoa2: Pessoa = {
	nome: "João",
	idade: 17,
	profissao: "Desenvolvedor",
};

const arrayPessoa: Array<Pessoa> = [pessoa, pessoa2];

const arrayNum: number[] = [1, 2, 3];

const arrayString: Array<string> = ["1", "2", "3"];

const num: number = 15;

if (num > 15) {
	//console.log("Num maior que 15");
} else if (num === 15) {
	//console.log("Num igual á 15");
} else {
	//console.log("Num menor que 15");
}

const typeUser = {
	admin: "Admin",
	student: "Estudante",
	viewer: "User",
};

const usuario = "admin";

function validateUser(user: string) {
	//console.log(typeUser[user as keyof typeof typeUser]);
}

validateUser(usuario);

for (let i = 0; i < 5; i++) {
	//console.log(i);
}

let N = 2;

while (N < 6) {
	//console.log(N);
	N++;
}

const array: Array<number> = [1, 2, 3, 4];

// console.log(array[0]);
// console.log(array[1]);

// console.log("Tamanho array", array.length);

array.push(4);

array.pop();

const buscarNum = array.find((num) => num > 2);

// console.log(buscarNum);

array.forEach((num) => {
	if (num > 2) {
		console.log(num);
	}
});
// diferença, map é assincrono e o foreach é mais lento
array.map((num) => {
	if (num > 2) {
		console.log(num);
	}
});
