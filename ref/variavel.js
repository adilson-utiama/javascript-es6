//VARIAVEIS
//Não Tipadas em JavaScript

//TIPOS

//string
variavelString = "Minha String";
variavelString2 = 'Minha Segunda String';

//number, decimal, inteiros
inteiro = 10;
hexadecimal = 0x110B6; 
decimal = 3.150;
notacaoCientifica = 3E5; // 3x10**5 = 30000

//boolean
verdadeiro = true;
falso = false;
ehMaior = 10 > 5; //true

//array
//aceita TUDO
array = [1,2,3,4,5];
misto = ['valorA', 2, 'valorB', array];
varios = [
	'valorC',
	15,
	function(){ 
		return true;
	},
	objeto = { 'chave' : 15}

];
//acesso
array[1]; // 2
misto[3][2]; // 3


//Objetos
Carro = {
	marca : 'Renaut',
	modelo : 'Logan',
	dimensoes : {
		c : '4.250mm',
		l : '1.735mm',
		h : '1.525mm'
	}
}
Carro.marca = 'FIAT';


//DECLARACAO

var a = b = c = 15; //todos iniciados com valor 15
var a1 = 40, b1 = 60, c1 = 'Alo Mundo';


//Propriedades null, undefined, NaN, Infinity

var nulo = null; // null -> valor nulo, ausencia de valor
var indefinido; //undefined -> valor indefinido, declarada mas nao inicializada
var naoENumero = 3 * 'Ola'; //NaN -> not a number
var numeroEnorme = 10562354**1500;  //Infinity -> numero infinito


//Alguns operadores especificos

var objeto = {
	valor1 : 12,
	valor2 : 15,
	valor3 : 56
};

//DELETE
delete objeto.valor1; //apaga uma propriedade

//IN
console.log('valor2' in objeto); // Verifica existencia de uma propriedade, retorna true ou false

//INSTANCEOF
var arr = [1,2,3];
console.log(arr instanceof Array); //Verifica tipo de objeto
var num = new Number(123);
console.log(num instanceof Number);

//NEW
var obj = new Array(); //Criar Objeto
obj.push(12);

//TYPEOF
// Retorna o tipo de dado
console.log(typeof 546);  // number
console.log(typeof 'string'); // string



//ES6 

//**HOISTING = Comportamento de mover declarações para o topo de um escopo (global ou não)
// onde podemos utilizar uma variavel ou funcao antes mesmo de declara-las
//Porem mesmo se você usar ou referir a variável e depois declará-la e inicializá-la, ela ainda retornará undefined
//mas não lançara erros


// LET
// { tem escopo de bloco mais proximo sem incidencia do **HOISTING }

var variavel = 23456;
//let variavel = 'string';  //SyntaxError: Identifier 'variavel' has already been declared

let v1;
v1 = 123;  //OK
console.log(v1);

if (true) {
  let y = 5;
}
//console.log(y);  // ReferenceError: y is not defined


// CONST
// Uma constante não pode alterar seu valor por meio de uma atribuição ou 
// ao ser declarada novamente enquanto o script é executado.
// Deve ser inicializada com um valor
// As regras de escopo para as constantes são as mesmas para as váriaveis let

// const constante; // SyntaxError: Missing initializer in const declaration

const constante2 = 1235; // OK 

// constante2 = 5698; // TypeError: Assignment to constant variable.

// Você não pode declarar uma constante
// com o mesmo nome de uma função ou variável que estão no mesmo escopo
// Isto irá causar um  erro

function f() {};
// const f = 5; //SyntaxError: Identifier 'f' has already been declared