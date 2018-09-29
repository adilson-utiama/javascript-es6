
//SINTAXE FORMAL
var livro = new Object();
livro.titulo = 'Ajax com JQuery';
livro.autor = 'Mauricio Samy Silva';
livro.paginas = 432;

//SINTAXE LITERAL
var livro2 = {
	'titulo' : 'Javascript ES6',
	'autor' : 'Desconhecido',
	'paginas' : 300,
	'funcao' : function(){
		//Faz Algo
	}
} 


//CONSTRUTOR
function Cilindro(r, h) {
	this.raioBase = r;
	this.altura = h;
	this.areaBase = calculaAreaBase;
}

function calculaAreaBase() {
	return Math.PI = Math.pow(this.raioBase, 2);
}

var cilindro = new Cilindro(2, 5);

var string = 'Raio da Base: ' + cilindro.raioBase + '\nAltura: ' + cilindro.altura + '\nArea da Base: ' + cilindro.areaBase();
console.log(string);



// Objeto Math
// especifico para algumas operacoes matematicas

//Propriedades
console.log(Math.E); // Numero de Euler
console.log(Math.LN10); // Logaritmo natural de 10
console.log(Math.LN2); // Logaritmo natural de 2
console.log(Math.LOG10E); // Logaritmo na base 10 de E
console.log(Math.LOG2E); // Logaritmo na base 2 de E
console.log(Math.PI); // Constante matematica PI
console.log(Math.SQRT1_2); // Raiz quadrada de 1/2
console.log(Math.SQRT2); // Raiz quadrada de 2

//METODOS COMUNS
console.log(Math.abs(-3)); // 3 // returna valor absoluto
console.log(Math.max(2,35,60,4,15,9)); // 60 // retorna o MAIOR valor entre aqueles passados como parametro
console.log(Math.min(2,35,60,4,15,9)); // 2 // retorna o MENOR valor entre aqueles passados como parametro
console.log(Math.round(3.56)); // 4 // arredonda numero, sempre para MAIOR quando numero for igual x.5 ou maior, caso seja menor, retorna o numero para o menor
console.log(Math.floor(3.56)); // 3 // arredonda numero, sempre para MENOR, mesmo quando o numero for maior que x.5
console.log(Math.pow(2, 2)); // 4 // eleva um numero (primeiro param) pelo segundo numero (segundo param) 
console.log(Math.sqrt(4)); // 2 // extrai raiz quadrada do numero
//random
console.log(Math.random()); // retorna numero randomico entre 0 e 1
console.log(Math.floor(Math.random() * 11)); //combinando metodos // retorna numero randomico entre 1 e 10

Math.log(3); //1.098... // extrai logaritmo natural (na base e) do numero

//METODOS MAIS ESPECIFICOS (Trigonometria)
Math.sin(1.571); // 1 // retorna o valor do seno do angulo x expresso em radianos
Math.cos(1.571); // 0 // retorna o valor do cosseno do angulo x expresso em radianos
Math.tan(3.927); // 1 // retorna o valor da tangente do angulo x expresso em radianos
Math.asin(0.7); // 0.785,, = PI/4 // retorna um valor numerico em radianos representando o arco cujo seno x e passadado como parametro
Math.acos(0.5); // 1.047... = PI/3 // retorna um valor numerico em radianos representando o arco cujo cosseno x e passado como parametro
Math.atan(1); // 0.785... = PI/4 // retorna valor numerico entre -PI/2 e PI/2, representando o arco em adianos, pela tangente passada



// Objeto Number
// manipula valores numericos

//Propriedades
console.log(Number.MAX_VALUE); // retorna valor numerico MAXIMO que o javascript pode manipular 
console.log(Number.MIN_VALUE); // retorna valor numerico MINIMO que o javascript pode manipular
//POSITIVE_INFINITY
console.log(Number(1.7e309)); // retorna Infinity sempre que o valor for MAIOR que o maximmo que o javascript pode manipular
//NEGATIVE_INFINITY
console.log(Number(-1.7e309)); // retorna -Infinity sempre que o valor for MENOR que o maximmo que o javascript pode manipular

//METODOS

//toString([base]) = converte em string
// O parametro opcional BASE define a base do numero a converter
let numero = new Number(45);
console.log(numero.toString()); // '45' // base 10 - se nao for fornecido parametro 
console.log(numero.toString(2)); // '101101' // base 2 - BINARIO
console.log(numero.toString(8)); // '55' // base 8 - OCTAL
console.log(numero.toString(16)); //  '2d' // base 16 - HEXADECIMAL

//toFixed(x) - retorna um numero a quantidade de casas decimais definida pelo parametro x
// se nao for passado parametro, sem casa decimal
let num = new Number(17.96124);
console.log(num.toFixed()); // 18 
console.log(num.toFixed(1)); // 18.0
console.log(num.toFixed(2)); // 17.96
console.log(num.toFixed(4)); // 17.9612

//toPrecision(x) 
//retorna numero com quantidade de digitos definida pelo parametro x
//numero e arredondado sempre que descarta parte da partedecimal, se x for maior que o numero de digitos, completara com 0
let n = new Number(17.96124);
console.log(n.toPrecision(1)); // 2e+1
console.log(n.toPrecision(2)); // 18
console.log(n.toPrecision(8)); // 17.961240


//toExponential(x)
//converte numero para sua notacao cientifica
//parametro deve estar entre 0 e 20
let exp = new Number(17.96124);
console.log(exp.toExponential(1)); // 1.8e+1
console.log(exp.toExponential(2)); // 1.80e+1
console.log(exp.toExponential(8)); // 1.79612400e+1