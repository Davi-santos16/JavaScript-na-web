const notas = [10, 8.5, 5, 6.5, 8, 7.5]


// for classico
// for (let i = 0; i < 5; i++) {
//     alert(`i é igual a ${i}`)
// }


// for (let indice = 0; indice < notas.length; indice++) {
//     alert(`indice: ${indice} || notas: ${notas[indice]}`)

    
// }

let somadasnotas = 0

for (let index = 0; index < notas.length; index++) {
     
    somadasnotas = somadasnotas + notas[index]
}
const media = (somadasnotas)/notas.length
alert(media)
