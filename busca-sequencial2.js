function buscaSequencial(lista, valorBusca, fnComp){
    for (let i = 0; i < lista.length; i++){
        //Encontrou o que está buscando: retorna a posição
        //em que foi encontrado
        // if(lista[i] === valorBusca) return i
        if (fnComp(lista[i], valorBusca)) return i
    }

    return -1 // valorBusca não encontrado em lista
}

const listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, nome){
    //Retorna true se o atributo first_name do objeto for igual a nome
    return obj.first_name === nome
}

console.time('FAUSTO')
console.log(buscaSequencial(listaNomes, 'FAUSTO', (obj, nome) => obj.first_name === nome))
console.timeEnd('FAUSTO')

console.log('----------------------------')

console.time('10000+')
let pos = buscaSequencial(listaNomes, 10000, (obj, valor) => obj.frequency_total > valor)
console.log(listaNomes[pos], pos)
console.timeEnd('10000+')