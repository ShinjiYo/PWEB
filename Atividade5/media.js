nome = prompt("Qual o nome do aluno?");
n1 = prompt("Qual a nota 1?")
n2 = prompt("Qual a nota 2?")
n3 = prompt("Qual a nota 3?")

nFinal = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

alert("Nota final do aluno " + nome + " : " + nFinal);