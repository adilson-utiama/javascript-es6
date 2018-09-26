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

