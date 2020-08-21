let vetor1 = [] //Forma "moderna"
let vetor2 = Array() //Forma "tradicional"

//Criacao de vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

//Insercao de novos valores em um vetor

//Forma 1: push() -> adiciona novos elementos ao final do vetor
vetor1.push('laranja')
vetor1.push('limao')

console.log(vetor1)

//Forma 2: unshift()
vetor1.unshift('maca')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

//Forma 3: splice()
vetor1.splice(2, 0, 'morango')
console.log(vetor1)

vetor1.splice(1, 0, 'jaca')
console.log(vetor1)

//Remocao de elementos do vetor

//Forma 1: pop() -> retira o ultimo elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

//Forma 2: shift() -> retira o primeiro elemento do vetor
let x2 = vetor1.shift()
console.log(vetor1, x2)

//Forma 3: splice()
//1 parametro: a posicao para remocao
//2 parametro: a quantidade de elementos a serem removidos
//Obs: o retorno de splice() na remocao sera um vetor contendo o(s) item(ns) removido(s)
let x3 = vetor1.splice(2, 1)
console.log(vetor1, x3)

//O splice() tambem serve para fazer substituicoes
vetor1.splice(1, 1, 'pera')
console.log(vetor1)

// Colocando mais alguns elementos no vetor
vetor1.push('amora')
vetor1.push('pessego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

//Metodos de percurso de vetores

// Forma 1: usando o for tradicional
//O inicio da variavel eh sempre na posicao 0 e seu incremento
//deve ir ate uma posicao antes do seu numero de elementos (length)
for(let i = 0; i < vetor1.length; i++){
    console.log(vetor1[i])
}

console.log('--------------------')

//Forma 2: for..of
//Percorrer o vetor do primeiro ao ultimo elemento de uma forma
//mais simples que o for tradicional
for(let fruta of vetor1){
    console.log(fruta)
}
