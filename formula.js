// let horaInicio = parseInt(prompt("Hora inicio"))
// let horaFim = parseInt(prompt("Hora Fim"))


// conversorHoraInicio = horaInicio * 60
// conversorHorafim = horaFim * 60

// resultadoSomas = conversorHoraInicio - conversorHorafim

// if( resultadoSomas < 0){
//    resultadoSomas = resultadoSomas * -1
// }else{

// }


let horaInit = 23
let minInit = 25

let horaFim = 3
let minFim = 50

let converterComecoReuniao = horaInit * 60 + minInit
let converterFimReuniao = horaFim * 60 + minFim

console.log(`Step 1:\nTempo Inicial = ${converterComecoReuniao}\nTempo Final = ${converterFimReuniao}`)

let calculaDif = ((converterFimReuniao - converterComecoReuniao) + 1440) % 1440

console.log(`\nStep 2:\nDiferença (minutos) = ${calculaDif}`)

let minResult = calculaDif % 60
let horasResult = (calculaDif - minResult) / 60

console.log(`\nStep 3:\nA reunião durou ${horasResult} horas e ${minResult} minutos`)





