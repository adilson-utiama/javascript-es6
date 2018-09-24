//Estruturas Condicionais

//IF - ELSEIF - ELSE
var numero = 5;
if(numero > 10){
	console.log('Numero é maior que 10');
} else if (numero === 5){
	console.log('Numero é metade de 10');
} else {
	console.log('Numero é menor que 10');
}


//SWITCH
var status = 'Em Andamento';
switch(status){
	case 'Criado':
		console.log('Status Criado');
		break;
	case 'Em Andamento':
		console.log('Status Em Andamento');
		break;
	case 'Finalizando':
		console.log('Status Finalizando');
		break;
	default:
		console.log('Status Inconsistente');
}


//Estruturas de LOOP

//FOR
var frutas = ['abacaxi', 'banana', 'maçã', 'pera'];
var strings = '';
for(var i = 0; i < frutas.length; i++){
	strings = strings + frutas[i] + ' ';
}
console.log(strings);

//WHILE
var valor = 0;
var soma1 = 0;
while(valor < 10){
	soma1 += valor;
	valor++;
}
console.log(soma1);

//DO - WHILE 
var n = 10;
do {
	console.log(n);
	n++;
} while(n < 10);
console.log(n);

//FOR - IN { itera sobre OBJETOS e ARRAYS } 
var Celular = {
	sistema : 'Android',
	versao : 8.0,
	ram : '2gb',
	capacidade_memoria : '32gb'
}

for(propriedade in Celular){
	console.log(propriedade + ' : ' + Celular[propriedade]);
}

var array = ['1', 25, '2', 256];
for(posicao in array){
	console.log(posicao + ' : ' + array[posicao]);
}


//Estruturas de Exceções

//TRY - CATCH - FINALLY
try {
	var y = xyz;
	var divisao = y / 0;
} catch(e) {
	console.log(e); //ReferenceError: xyz is not defined
} finally {
	console.log('Bloco Finally');
}

//THROW - Lancar exceção
var boleano = true;
if(boleano){
	throw new Error('Erro lançado');
}

