const nota1 = 10;
const nota2 = 3;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;
console.log("Nota Final: " + media.toFixed(2))

if (media >= 7) {
    console.log("Aprovado")
} else if (media >= 5 && media < 7) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}