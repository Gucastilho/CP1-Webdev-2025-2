/*
  1 -> Coleta o valor do tempo dos campos HTML
  2 -> Converte para int
  3 -> Converte horas para minutos e obtem soma de total de minutos iniciais
*/
function calculaTempoInit() {
  let inputHoraInit = parseInt(document.getElementById("horaIni").value)
  let inputMinInit = parseInt(document.getElementById("minIni").value)

  console.log(`Horário Inicial: ${inputHoraInit} horas e ${inputMinInit} minutos`)
  let minInit = (inputHoraInit * 60) + inputMinInit

  return minInit
}

/*
  1 -> Coleta o valor do tempo dos campos HTML
  2 -> Converte para int
  3 -> Converte horas para minutos e obtem soma de total de minutos finais
*/
function calculaTempoFim() {
  let inputHoraFim = parseInt(document.getElementById("horaFim").value)
  let inputMinFim = parseInt(document.getElementById("minFim").value)

  console.log(`Horário Final: ${inputHoraFim} horas e ${inputMinFim} minutos`)
  let minFim = (inputHoraFim * 60) + inputMinFim

  return minFim
}

/*
  1 -> Calcula a duração da reunião:
    - Determina o módulo entre o tempo inicial e final (minutos)
    - Ajusta o valor adicionando-se mais 1 dia (1440 minutos)
    - Divide por um dia para determinar o período e coleta o resto
*/
function calculaDuracao(tempoInit, tempoFim) {
  let resultado = ((tempoFim - tempoInit) + 1440) % 1440
  console.log(`Duração da Reunião: ${resultado} minutos`)

  return resultado;
}

/*
  1 -> Calcula o tempo inicial, final e a duração (minutos)
  2 -> Converte para horas e minutos 
  3 -> Verifica se o valor da hora ou minuto é menor que 10 e formata
    para manter 2 casas decimais (eg: exibir 05 ao invés de apenas 5)
*/
function calcular() {
  let tempoInit = calculaTempoInit()
  let tempoFim = calculaTempoFim()
  let resultadoDuracao = calculaDuracao(tempoInit, tempoFim);
  
  let valorMinutos = resultadoDuracao % 60
  let valorHoras = (resultadoDuracao - valorMinutos) / 60
  
  let imprimeHora = document.getElementById("horas");

  if (valorHoras < 10) {
      imprimeHora.innerText = "0" + valorHoras;
  }
  else {
    imprimeHora.innerText = valorHoras;
  }

  let imprimeMinutos = document.getElementById("minutos")
  if (valorMinutos < 10) {
    imprimeMinutos.innerText = "0" + valorMinutos
  }
  else {
    imprimeMinutos.innerText = valorMinutos
  }
}
