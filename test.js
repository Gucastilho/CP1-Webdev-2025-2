
function capturaHorarioInicial(){
    // capturar a hora do horario inicial
    let inputHoraInicio = document.getElementById("horaIni")
    console.log(inputHoraInicio)
    let horaInicio = inputHoraInicio.value
    console.log(horaInicio)
    // capturar os minutos do horario inicial
    let inputMinutosInicio = document.getElementById("minIni")
    console.log(inputMinutosInicio)
    let minutosInicio = inputMinutosInicio.value
    console.log(minutosInicio) 
    
    return horaInicio
}

function capturaHorarioFinal(){
    // capturar a hora do horario final
    let inputHoraFinal = document.getElementById("horaFim")
    console.log(inputHoraFinal)
    let horaFinal = inputHoraFinal.value
    console.log(horaFinal)
    // capturar os minutos do horario final
    let inputMinutosFinal = document.getElementById("minFim")
    console.log(inputMinutosFinal)
    let minutosFinal = inputMinutosFinal.value
    console.log(minutosFinal)

    return horaFinal

}

function testValores(x1, x2){
    console.log(`Test+  ${x1} + ${x2} `)
}

function calcular(){
   let horaInicioTest = capturaHorarioInicial()
   let horaFimTest = capturaHorarioFinal()
    testValores(horaInicioTest, horaFimTest)
}









