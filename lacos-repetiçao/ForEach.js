// let sum = 0

// const Numeros = [65, 44, 12, 4]
// function minhaFuncao(Numero) {
//     sum += Numero

// }


// Numeros.forEach(minhaFuncao)



let sum = 0
const notas = [10, 6.5, 8, 7.5]


// notas.forEach(SomaDasNotas)

// function SomaDasNotas(num){
//     sum+=num

// }

notas.forEach((nota)=>{sum+=nota})

const media = sum / notas.length
alert(media)