// let horaInicio = parseInt(prompt("Hora inicio"))
// let horaFim = parseInt(prompt("Hora Fim"))


// conversorHoraInicio = horaInicio * 60
// conversorHorafim = horaFim * 60

// resultadoSomas = conversorHoraInicio - conversorHorafim

// if( resultadoSomas < 0){
//    resultadoSomas = resultadoSomas * -1
// }else{

// }


let horaIni = 14
let minIni = 30

let horaFim = 16
let minFim = 10

let converterComecoReuniao = horaIni * 60 + minIni
let converterFimReuniao = horaFim * 60 + minFim

console.log(converterComecoReuniao, converterFimReuniao)

calculaDif = converterComecoReuniao - converterFimReuniao

console.log(calculaDif)

if(calculaDif <0){
   calculaDif = calculaDif * -1
}else{}

console.log(calculaDif)

convertMod =  Math.floor(calculaDif / 60)
convertMod = convertMod.toFixed(0)

console.log(convertMod)

convertRest = calculaDif % 60

console.log(convertRest)



