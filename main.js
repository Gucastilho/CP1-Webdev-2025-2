function capturaHoraInicial() {
  // capturar a hora do horario inicial
  let inputHoraInicio = document.getElementById("horaIni");
  console.log(inputHoraInicio);
  let horaInicio = inputHoraInicio.value;
  console.log(horaInicio);
  // capturar os minutos do horario inicial
  let inputMinutosInicio = document.getElementById("minIni");
  console.log(inputMinutosInicio);
  let minutosInicio = inputMinutosInicio.value;
  console.log(minutosInicio);

  horaInicio = parseInt(horaInicio * 60)

  return horaInicio;
}

function capturaHoraFinal() {
  // capturar a hora do horario final
  let inputHoraFinal = document.getElementById("horaFim");
  console.log(inputHoraFinal);
  let horaFinal = inputHoraFinal.value;
  console.log(horaFinal);
  // capturar os minutos do horario final
  let inputMinutosFinal = document.getElementById("minFim");
  console.log(inputMinutosFinal);
  let minutosFinal = inputMinutosFinal.value;
  console.log(minutosFinal);

  horaFinal = parseInt(horaFinal * 60)

  return horaFinal;
}

function capturaMinInicial() {
  // capturar os minutos do horario inicial
  let inputMinutosInicio = document.getElementById("minIni");
  console.log(inputMinutosInicio);
  let minutosInicio = inputMinutosInicio.value;
  console.log(minutosInicio);

  return parseInt(minutosInicio);
}

function capturaMinFinal() {
  // capturar os minutos do horario final
  let inputMinutosFinal = document.getElementById("minFim");
  console.log(inputMinutosFinal);
  let minutosFinal = inputMinutosFinal.value;
  console.log(minutosFinal);

  return parseInt(minutosFinal);
}
// captura os horarios /////////
// funções 


function testValores(horaIni, horaFim, minIni, minFim) {
  resultadoSomas = parseInt((horaIni + minIni) - (horaFim + minFim));

  if (resultadoSomas < 0) {
    resultadoSomas = resultadoSomas * -1;
  } else {
  }
  return parseInt(resultadoSomas);
}

function calcular() {
  let horaInicioTest = parseInt(capturaHoraInicial());
  let horaFimTest = parseInt(capturaHoraFinal());
  let minInicioTest = parseInt(capturaMinInicial());
  let minFimTest = parseInt(capturaMinFinal());
  let resultadoSomasHorasMin = parseInt(testValores(horaInicioTest, horaFimTest, minInicioTest, minFimTest))

  console.log(horaInicioTest,horaFimTest, minInicioTest, minFimTest)
  
  
  console.log(resultadoSomasHorasMin)
  valorHoras = Math.floor(resultadoSomasHorasMin / 60)
  console.log(valorHoras)
  valorMinutos = resultadoSomasHorasMin % 60
  console.log(valorMinutos)
  
  
  let imprimeHora = document.getElementById("horas");
  imprimeHora.innerText = valorHoras;
  
  let imprimeMinutos = document.getElementById("minutos")
  imprimeMinutos.innerText = valorMinutos
  }
