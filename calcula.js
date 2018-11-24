function somar(){
  var numeroUm = parseFloat(document.getElementById("numUm").value)
  var numeroDois = parseFloat(document.getElementById("numDois").value)
  var total

  total = numeroUm + numeroDois

  console.log(numeroUm)
  console.log(numeroDois)
  console.log(total)

  document.getElementById("resultado").innerHTML = total
}

function diminuir() {
  var numeroUm = parseFloat(document.getElementById("numUm").value)
  var numeroDois = parseFloat(document.getElementById("numDois").value)
  var total

  total = numeroUm - numeroDois
  console.log(numeroUm)
  console.log(numeroDois)
  console.log(total)

  document.getElementById("resultado").innerHTML = total
}

function dividir() {
  var numeroUm = parseFloat(document.getElementById("numUm").value)
  var numeroDois = parseFloat(document.getElementById("numDois").value)
  var total

  total = numeroUm / numeroDois

  console.log(numeroUm)
  console.log(numeroDois)
  console.log(total)

  document.getElementById("resultado").innerHTML = total
}

function multiplicar() {
  var numeroUm = parseFloat(document.getElementById("numUm").value)
  var numeroDois = parseFloat(document.getElementById("numDois").value)
  var total

  total = numeroUm * numeroDois

  console.log(numeroUm)
  console.log(numeroDois)
  console.log(total)

  document.getElementById("resultado").innerHTML = total
}
