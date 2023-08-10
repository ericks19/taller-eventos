let div = document.getElementById("container")
console.log(div)

function mostrarDivAlert(){
  alert("Hola soy el div")
}

div.addEventListener("click", mostrarDivAlert)