//Usamos um array, quando precisamos criar lista

//Para fazer um mapa na cartografia, usamos as respostas das imagens imagens de satélite, e vetorizamos, criando uma camada, a partir da imagem em pixel.



const vermelho = "telhado";
console.log (vermelho);

const verde = "mata";
console.log (verde);

const azul = "agua";
console.log (azul);

//logo usamos oarray, para saber a resposta do imageamento, de acordo com a posição da lista

var espectroDeBandas= [ vermelho, verde,azul ];

console.log (espectroDeBandas[0]) //quando o espectro retona na posicao 0, sabemos que é  telhado
console.log (espectroDeBandas[1]) //quando o espectro retona na posicao 1, sabemos que é  mata
console.log (espectroDeBandas[2]) //quando o espectro retorna na posicao 2, sabemos que é agua




