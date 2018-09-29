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