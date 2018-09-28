//STRINGS

var string = 'Minha String';

console.log(string.length); // retorna quantidade de caracteres

console.log(string.charAt(0)); // charAt(indice) -> retorna caracter da posicao
console.log(string.charCodeAt(0)); //charCodeAt(indice) -> retorna codificação Unicode da posicao
console.log(string.concat(' Concatenada ', 'com concat()')); //concat(...args) -> concatena strings, retorna uma nova string 
console.log(string.indexOf('Min')); //indexOf(stringProcurada, incioPosicao) -> retorna o indice  da primeira ocorrencia achada
console.log(string.lastIndexOf('a')); //retorna o indice da ultima ocorrencia achada
console.log(string.match(/[nha]{1}/)); //match(regex) -> retorna as ocorrencias encontradas definida pelo expressao regular
console.log(string.replace('a', 'A')); //replace(string|regex, nova_string|funcao) -> substitui a primeira ocorrencia encontrada pela nova_string
console.log(string.search('nha')); //search(regex) -> retorna a posicao da primeira ocorrencia encontrada
console.log(string.slice(1, 3)); //slice(inicio, fim) -> recorta string pela posicao inicial e final
console.log(string.split(' ')); //split(separador, limite) -> criar array de substrings a partir do separador
console.log(string.toLowerCase());// retorna uma nova string com todos os caracteres em caixa BAIXA
console.log(string.toUpperCase());// retorna uma nova string com todos os caracteres em caixa ALTA


//ES6

//TEMPLATE STRINGS - continua no livro

//SIMPLES (Interpolação de strings)
let nome = 'Wilson';
console.log(`Bem-Vindo, ${nome}`); //Uso de crase no lugar de aspas simples - ${variavel}

let n1 = 1, n2 = 2;
console.log(`${n1} + ${n2} = ${n1 + n2}`); //podemos inserir expressoes dentro delas
// 1 + 2 = 3

console.log(`
	Mensagem 
	com 
	quebra
	de
	Linha`); 

//	Mensagem 
//	com 
//	quebra
//	de
//	Linha

//neste caso Ideal para podermos construir HTML, sem necessidade de usr \n, \r
let idade = 18;
let endereco = 'Av. Paulista, 1000'
const div =
	`
	<div>
		<p>Nome: ${nome}</p>
		<p>Idade: ${idade}</p>
		<p><Endereço: ${endereco}/p>
	</div>
	`;
console.log(div);


//TEMPLATE STRING MARCADO

//Exemplo - Mensagem muda de acordo com o horario
const horas = new Date().getHours();

const mensagem = defineMensagem`${''}${horas} horas`; //marcado com nome do metodo - sem parenteses


//Tendo acesso as strings e aos valores, podemos manipular os dados
function defineMensagem(strings, ...values) {
	const hora = values[1];
	if( hora >= 6 && hora <= 12 ) {
		values[0] = 'Bom Dia';
	} else if( hora > 12 && hora <= 18 ) {
		values[0] = 'Boa Tarde';
	} else {
		values[0] = 'Boa Noite';
	}

	values[0] = `${values[0]}, são `;
	return `${values[0]}${strings[0]}${hora}${strings[2]}`
}
console.log(mensagem);