var estudiantes = ["maria", "Juan", "Pedro", "Rosa", "Manuela"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, como estas en este dia ${estudiante}`);
    
}
//Primer forma
/* for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
} */

//Segunda forma
for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}

var estudiantex = ["maria", "Juan", "Pedro", "Rosa", "Manuela"];
estudiantex.pop()
function saludarEstudiantex(estudianto) {
    console.log(`Hola, como estas en este dia ${estudianto}`);
    
}
while (estudiantex.length > 0) {
    console.log(estudiantex);
    var estudianto = estudiantex.shift();
    saludarEstudiantex(estudiantex);
}

estudianto

var num = 1

while (num <= 10) {
    console.log(num)
    num++
}
num

var edad = 19

while (edad <=18 && edad > 0) {
    console.log(edad)
    return "puedes beber leche"
}

var estuden = ["Juan", "Juanita", "Daniela"]
estuden
var deathCount = 0
var nuevo = "julian"
var todos = [estuden, deathCount, nuevo]
todos

function solution(estuden, deathCount, nuevo) {
   /*  if ( deathCount > 0) {
        estuden.pop();
        deathCount--
        console.log(deathCount)
        estuden.push(nuevo)
    } else {
        estuden.push(nuevo)
    }  */
    /* return estuden */
    while (deathCount > 0) {
        estuden.pop();
        deathCount--
        console.log(deathCount)
        
    } 
    estuden.push(nuevo)
    return estuden
}
console.log(solution(estuden, deathCount, nuevo))
