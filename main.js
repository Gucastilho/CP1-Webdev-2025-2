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

  return horaFinal;
}

function capturaMinInicial() {
  // capturar os minutos do horario inicial
  let inputMinutosInicio = document.getElementById("minIni");
  console.log(inputMinutosInicio);
  let minutosInicio = inputMinutosInicio.value;
  console.log(minutosInicio);

  return minutosInicio;
}

function capturaMinFinal() {
  // capturar os minutos do horario final
  let inputMinutosFinal = document.getElementById("minFim");
  console.log(inputMinutosFinal);
  let minutosFinal = inputMinutosFinal.value;
  console.log(minutosFinal);

  return minutosFinal;
}


function testValores(horaIni, horaFim) {
  resultadoSomas = horaIni - horaFim;

  if (resultadoSomas < 0) {
    resultadoSomas = resultadoSomas * -1;
  } else {
  }
  return resultadoSomas;
}

function calcular() {
  let horaInicioTest = capturaHoraInicial();
  let horaFimTest = capturaHoraFinal();
  let minInicioTest = capturaMinInicial();
  let minFimTest = capturaMinFinal();

  let resultadoHoras = testValores(horaInicioTest, horaFimTest);
  let resultadosMinutos = testValores(minInicioTest, minFimTest);
  testValores(horaInicioTest, horaFimTest);
  testValores(minInicioTest, minFimTest);

  let elementHora = document.getElementById("horas");
  elementHora.innerText = resultadoHoras;
  let elementMinutos = document.getElementById("minutos");
  elementMinutos.innerText = resultadosMinutos;
}
