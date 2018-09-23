//METODOS COMUNS DE ARRAYS
var arrayPalavras = ['Es6', 'PHP', 'Java', 'Python', 'Ruby'];
arrayPalavras.push('JavaScript'); //Adiciona elemento na ultima posicao
arrayPalavras.pop(); //remove o ultimo elemento do array e retorna o valor removido
arrayPalavras.shift(); // remove o primeiro lemento do arrya, e retorna o valor removido
arrayPalavras.indexOf('Es6'); //retorna a posicao do elemento no array. Leva-se em conta o tipo de dado no array, string/string, number/number, entre outros
arrayPalavras.reverse(); //invertea ordem do array, nao modifica o array original
arrayPalavras.slice(0, 2); //retorna um array definido pelo indiceInicial e indiceFinal
arrayPalavras.splice(1, 0); // remove/adiciona elemento na posicao indicada; aplice(posicao, posicoesRemover, elementosAdicionar)

console.log(arrayPalavras);

//METODOS AUXILIARES PARA ARRAYS		
var nomes = ['maria', 'jose', 'joao', 'pedro'];

//FOREACH
// { iteracao dos objetos }
//passando uma funcao anonima, com parametro
nomes.forEach(function(nome){
	console.log(nome);
});

function imprimeNome(nome){
	console.log(nome);
}
//passando uma funcao que recebe parametro
nomes.forEach(imprimeNome);

//MAP
// { retorna um novo array, com as alteracoes  }
// { nao altera o array original }
var numeros = [1, 2, 3, 4, 5, 6];
var dobros =  numeros.map(function(numero){
	return numero * 2;
});
console.log(dobros);

//FILTER
// { retorna um novo array, com apenas com os valores filtrados }
// { nao altera o array original }
var alunos = [
	{ nome: 'maria', idade: 17},
	{ nome: 'joao', idade: 18},
	{ nome: 'jose', idade: 20}
];
var alunosMaioresDeIdade = alunos.filter(function(aluno){
	return aluno.idade >= 18;  //CONDICIONAL
});
console.log(alunosMaioresDeIdade);

//FIND
// { retorna o objeto de acordo com o criterio de busca ou pesquisa }
// { nao altera o array original }
var aluno = alunos.find(function(aluno){
	return aluno.nome === 'jose';
});
console.log(aluno);

//EVERY
// { retorna um boolean }
// { nao altera o array original }
// retorna TRUE caso TODOS elementos atendam a condicao, caso apenas um dos elementos nao passe retorna FALSE 
var saoTodosAlunosMaioresIdade = alunos.every(function(aluno){
	return aluno.idade > 18; //CONDICIONAL
});
console.log(saoTodosAlunosMaioresIdade);

//SOME
// { retorna um boolean }
// { nao altera o array original }
// { retorna TRUE, se pelo menos um elemento satisfaca certa condicao }
var pesoDasMalas = [12,32,21,29];
var acimaDoPeso = pesoDasMalas.some(function(peso){
	return peso > 30;
});
console.log(acimaDoPeso); //true

//REDUCE
// { nao altera o array original }
// { agrega todos os elementos para condensa-los em um unico elemento ou objeto }
// Aceita dois parametros, um valorInicial e valor retornado da iteracao
var nums = [2,6,10,12,25];
var valorInicial = 0;
valorInicial = nums.reduce(function(valorInicial, numero){
	return valorInicial + numero;
});
console.log(valorInicial); //55
//Outro Exemplo
// array.reduce(funcao(valor1, valor2, indice, array), valorInicial)
var nomesReduce = alunos.reduce(function(arrayNomes, aluno, indice, array){
	arrayNomes.push(aluno.nome);
	return arrayNomes;
}, []);
console.log(nomesReduce);


////////////////////////////////////////////


//ES6 

///Iteradores e Iteraveis

var frutas = ['abacaxi', 'banana', 'pera', 'melancia', 'laranja'];

var iterador = frutas[Symbol.iterator]();  //gera um iterador
var done = false;
var proximo = iterador.next();
do {
	var fruta = proximo.value; // retorna o valor
	console.log(proximo); // {value : valor, done : boolean}
	console.log(fruta);

	proximo = iterador.next(); // passa para a proxima iteracao ( posicao )
} while(!proximo.done);


//Iteracao com laco FOR...OF
//semelahnte ao foreach do java

var ferramentas = ['alicate', 'chave de fenda', 'martelo', 'furadeira'];
for(var objeto of ferramentas){
	console.log(objeto);
}



