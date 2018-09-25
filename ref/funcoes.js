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

console.log(calculaArea(15, 3));

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