var edad = 48
function sufragante() {
if (edad >= 18) {
    return "Puede Votar"
} else {
    return "No Puede votar"
}
}
console.log(sufragante())

var edad = 91;
function sufragante() {
if (edad >= 18 && edad <= 90) {
    return "Puede Votar"
} else {
    return "No Puede votar"
}
}
console.log(sufragante())

/* Operador ternario
El operador ternario consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.

condicion ? Bloque verdadero : Bloque falso
Por ejemplo, guardemos en una variable un mensaje si un número es par o impar.

function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par" */
var numer = 10;
var resultado = numer === 1 ? "Si soy un uno" : "No soy un uno";
resultado

var piedra = "Piedra";
var tijera = "Tijera";
var papel = "Papel";
var jugador1
var jugador2

function juegoGanado(jugador1, jugador2) {
    if (jugador1 == piedra && jugador2 == tijera || jugador1 == tijera && jugador2 == papel || jugador1 == papel && jugador2 == piedra) {
        return "Jugador 1 eres el feliz ganador"
    } else if (jugador2 == piedra && jugador1 == tijera || jugador2 == tijera && jugador1 == papel || jugador2 == papel && jugador1 == piedra) {
        return "Jugador 2 eres el feliz ganador"
    } else {
        return "Jugadores tienen un triste empate vuelvan a jugar para definir el ganador"
    }
} 
console.log(juegoGanado(tijera, piedra))