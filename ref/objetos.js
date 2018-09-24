
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