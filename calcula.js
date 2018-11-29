function Somar(){
  var numeroUm = parseFloat(document.getElementById("numUm").value)
  var numeroDois = parseFloat(document.getElementById("numDois").value)
  var total

  total = numeroUm + numeroDois

  console.log(numeroUm)
  console.log(numeroDois)
  console.log(total)

  document.getElementById("resultado").innerHTML = total
}

function Diminuir() {
  var numeroUm = parseFloat(document.getElementById("numUm").value)
  var numeroDois = parseFloat(document.getElementById("numDois").value)
  var total

  total = numeroUm - numeroDois
  console.log(numeroUm)
  console.log(numeroDois)
  console.log(total)

  document.getElementById("resultado").innerHTML = total
}

function Dividir() {
  var numeroUm = parseFloat(document.getElementById("numUm").value)
  var numeroDois = parseFloat(document.getElementById("numDois").value)
  var total

  total = numeroUm / numeroDois

  console.log(numeroUm)
  console.log(numeroDois)
  console.log(total)

  document.getElementById("resultado").innerHTML = total
}

function Multiplicar() {
  var numeroUm = parseFloat(document.getElementById("numUm").value)
  var numeroDois = parseFloat(document.getElementById("numDois").value)
  var total

  total = numeroUm * numeroDois

  console.log(numeroUm)
  console.log(numeroDois)
  console.log(total)

  document.getElementById("resultado").innerHTML = total
}
