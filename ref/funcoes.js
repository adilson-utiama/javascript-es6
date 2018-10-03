//SINTAXE LITERAL
var minhaFuncao = function(arg1, arg2){
	return arg1 + arg2;
};

var numero = minhaFuncao(3,5);
console.log(numero);


//SINTAXE (function f(){})()
function calculaArea(b, h) {
	var area = b * h;
	return area;
}
console.log(calculaArea(15, 3)); // 45

//Retornando array
function calculaRetangulo(b, h) {
	var area = b * h;
	var perimetro = (b + h) * 2;
	return [area, perimetro];
}
console.log(calculaRetangulo(15, 3)); // [ 45, 36 ]

//Retornando Objeto
function calculaRetangulo2(b, h) {
	var area = b * h;
	var perimetro = (b + h) * 2;
	return {
		area : area,
		perimetro : perimetro
	}
}
console.log(calculaRetangulo2(15, 3)); // { area: 45, perimetro: 36 }



//ES6

//ARROW FUNCTION
// Definicao
// parametros dentro de parenteses
// Fat Arrow ( => )
// Corpo da funcao entre chaves

//EX:
(params1, params2, _, params3) => {  // Usa-se '_' (underline) para passar parametros 'vazio'
	//Faz algo
} 

//EX2
// Podemos ignorar a palavra-chave 'function'
let nome = 'Wilson'
let boasVindas = (nome) => {
	return `Seja Bem-Vindo ${nome}`;
}
console.log(boasVindas(nome));

//EX3
// No caso de apenas um parametros, podemos eliminar os parenteses
let boasVindas2 = nome => {
	return `Seja Bem-Vindo ${nome}`;
}
console.log(boasVindas2(nome));

//EX4
// Se tivermos apenas uma linha no escopo da funcao, podemos eliminar as '{}' chaves
let boasVindas3 = nome => `Seja Bem-Vindo ${nome}`;
console.log(boasVindas3(nome));


// Diferenca no contexto do 'THIS' na execucao do codigo
// { consegue capturar o THIS do seu contexto delimitador  }

// TENTANDO USAR A FORMA TRADICIONAL
const equipe1 = {
	nome : 'Guerreiros Z',
	membros : ['Goku', 'Kuririn', 'Vegeta'],
	membrosDaEquipe : function() { 
		this.membros.forEach(function(membro){
			// Neste contexto o this.nome não se refere a propriedade 'nome'
			// neste caso o 'THIS' esta no escopo da funcao anonima
			console.log(`${membro} é da equipe ${this.nome}`); // aqui o 'THIS.NOME' é UNDEFINED
		});
	}
}
equipe1.membrosDaEquipe();

// TRUQUE USANDO A FORMA TRADICIONAL
const equipe2 = {
	nome : 'Guerreiros Z',
	membros : ['Goku', 'Kuririn', 'Vegeta'],
	membrosDaEquipe : function() {

		console.log(this); // Aqui o 'THIS' se refere ao Objeto em si
		const that = this; // Armazena o 'THIS' em uma constante

		this.membros.forEach(function(membro){
			// aqui o 'THIS' se refere ao 'THAT' que armazena a referencia do this do escopo
			console.log(`${membro} é da equipe ${that.nome}`); // Agora podemos acessar a propriedade 'NOME'
		});
	}
}
equipe2.membrosDaEquipe();

// SOLUCIONANDO COM METODO BIND (ES5)
const equipe3 = {
	nome : 'Guerreiros Z',
	membros : ['Goku', 'Kuririn', 'Vegeta'],
	membrosDaEquipe : function() { 
		this.membros.forEach(function(membro){
			console.log(`${membro} é da equipe ${this.nome}`);
		}.bind(this)); // Aqui o metodo BIND cria uma nova funcao identica com que foi associado, 
		//mas com o THIS da Funcao original
	}
}
equipe3.membrosDaEquipe();

// SOLUCIONANDO COM ARROW FUNCTION
const equipe4 = {
	nome : 'Guerreiros Z',
	membros : ['Goku', 'Kuririn', 'Vegeta'],
	membrosDaEquipe : function() { 
		this.membros.forEach((membro) => {  // ARROW FUNCTION
			// Aqui simplesmente o arrow function faz o BIND de forma automatica
			//referenciando o THIS do contexto da execucao delimitadora
			console.log(`${membro} é da equipe ${this.nome}`); 
		});
	}
}
equipe4.membrosDaEquipe();


//ATRIBUINDO VALORES PADROES
// Podemos definir um valor padrao, caso nao venha ser informado

function imprimeNome(nome, sobrenome, nomeDoMeio = '') {
	console.log(` ${nome} ${nomeDoMeio} ${sobrenome} `)
} 
imprimeNome('Wilson', 'Silva'); // Wilson Silva
imprimeNome('Wilson', 'Silva', 'Guedes'); // Wilson Guedes Silva

//Referencia para outros valores padroes
function calculaPotencia(x = 2, y = x) {  //<= aqui o parametro 'y' referencia 'x'
	console.log(Math.pow(x,y));
}
calculaPotencia(); // 4
calculaPotencia(2); // 4
calculaPotencia(2,2); // 4


//Referencia para variaveis externas
//contudo e necessario cautela, poi dependendo do escopo em que se encontra a variavel, podemos ganhar um erro
let v = 'valor 1';
function funcao(x = v) {
	console.log(x);
}
funcao(); //valor 1

//let v2 = 'valor 1';
//function funcao(x = v2) {
//	let v2 = 'valor 2';
//	console.log(x);
//}
//funcao(); // v2 is not defined

//Utilizando funcoes como valores padroes
function facaAlgo(nome, callback = z => {  //<- arrow function
	console.log(z);
}) {
	callback(nome);
}

facaAlgo('Nome'); // Nome


//Parametros Obrigatorios - DICA

function parametroObrigatorio(parametro) {
	throw new Error(` O parametro "${parametro}" é obrigatorio.`);
}

function inserirNaTela(objeto = parametroObrigatorio('objeto')) {
	//Faz algo
}
//Se nao informarmos algum parametro, retornara erro
//inserirNaTela(); //Error:  O parametro "objeto" é obrigatorio.

