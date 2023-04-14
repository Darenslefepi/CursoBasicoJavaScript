// declarativa

function miFuncion() {
    return 3;
}
miFuncion()
//expresion

var miFuncion = function(a,b) {
    return a + b;
}
miFuncion()

function saludarEstudiantex(estudiante) {
    console.log(estudiante);
}
saludarEstudiantex("andres")

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);//esto son plnatillas literales
}
saludarEstudiantes("andres")

function suma(a,b) {
    var total = a + b;
    return total
}
console.log(suma(15,2))

function multiplicar(w,t) {
    return w * t;
}
console.log(multiplicar(25,4))

var resultado1 = suma(23,10)
resultado1

var nombre = "Andres Felipe"

function nombreCompleto() {
    var apellido = "Giraldo Garcia";
    console.log(nombre)
    console.log(apellido)
    return nombre + " " + apellido
}
console.log(nombreCompleto())

nombre

var nombre = "JavaScript"

function saludar(){
    console.log("Hola " + nombre)
}

saludar()
