var frutas = ["Manzana", "Plátano", "Cereza", "Mango"];
console.log(frutas)
console.log(frutas.length)
console.log(frutas[2])
frutas.push("Limon")
console.log(frutas)
frutas.unshift("uvas")
console.log(frutas)
frutas.pop()
console.log(frutas)
frutas.shift()
console.log(frutas)
console.log(frutas.indexOf("Mango"))
var posicion = frutas.indexOf("Mango");
frutas
console.log(frutas[3])
console.log(frutas[posicion])
posicion
frutas.push("Fresa", "Granadilla")
frutas
frutas.unshift("Guanabana", "Kiwi")
frutas
frutas.pop()

var arraySecreto = ["Huevo","Gallina","Vaca"]

/* Array B: [1,"Gallina","Vaca"] */

function solution(arraySecreto) {
    // Tu código aquí 👈
    if (typeof arraySecreto[0] === "string") {
      return true
    } else {
      return false
    }
  }
  console.log(solution(arraySecreto))
  console.log(typeof arraySecreto[0])