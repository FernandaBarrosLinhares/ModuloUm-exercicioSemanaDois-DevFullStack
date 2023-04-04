//Crie um programa com JavaScript que a partir de um salário inicial, calcule quantos meses será necessário para atingir uma meta salarial recebendo um aumento a cada 6 meses equivalente a 10% no salário corrente.

let salarioAtual= 3000
let metaSalario = 7500;
var mes = 1

let BrazilianReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  while (salarioAtual < metaSalario) {
    mes++;
  }

  if (mes % 6 == 0) {
    salarioAtual = salarioAtual + salarioAtual * 0.1;
    console.log(
      `No mês ${mes} recebi um aumento de 10%. Agora meu salário é ${BrazilianReal.format(
        salarioAtual
      )}`
    );
  }

console.log(
  `Levei ${mes / 12} anos pra chegar ao salário de ${BrazilianReal.format(
    salarioAtual
  )}`
);
