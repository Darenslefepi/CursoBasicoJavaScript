var numero = 10;
function validar() {
switch (numero) {
    case 1:
        return "soy un uno!"
        break;
    case 10:
        return "Soy un diez!"
        break;
    default:
        return "No soy nada!"
}
}
console.log(validar())

var piedra = "Piedra";
var tijera = "Tijera";
var papel = "Papel";
var jugador1
var jugador2

function juegoGanado(jugador1, jugador2) {
    switch (true) {
        case jugador1 == piedra && jugador2 == tijera || jugador1 == tijera && jugador2 == papel || jugador1 == papel && jugador2 == piedra:
            return "Gana Jugador 1"
            break;
        case jugador1 == tijera && jugador2 == piedra || jugador1 == papel && jugador2 == tijera || jugador1 == piedra && jugador2 == papel:
            return "Gana Jugador 2"
            break;
        default:
            return "Tienen un triste empate, Jueguen de nuevo"
    }
}
console.log(juegoGanado(piedra, papel))

if (false === !true) { console.log(false == true) } else { console.log(true === !false) }