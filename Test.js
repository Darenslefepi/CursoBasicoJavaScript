/* Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
Es un espacio en memoria para guardar algo como string, number, boolena, array, object, functions entre otros, y lo cual se hace con la palabra reservada var, let o const
¿Cuál es la diferencia entre declarar e inicializar una variable?
la diferencia es que al declarar solo nombramos la variable pero no le damos un valor o algo a guardar, ejemplo var mascota; ya cuando inicializamos le damos el valor ejemplo mascota = "gato", de igual forma se puede hacer de forma continua ejemplo var mascota = "gato", cabe aclarar que si utilizamos const debemos declarar e inicializar inmediatamente ya que esta no nos permite declarar sin inicializar ya que es una variable que no podremos cambiar en el futuro.
¿Cuál es la diferencia entre sumar números y concatenar strings?
la diferencia es que al sumar se hace la operacion matematica de suma ejemplo 1 + 1 = 2, en cambio al concatenar se unen los valores y se crea un string, ejemplo 1 + "1" = 11
¿Cuál operador me permite sumar o concatenar?
el operador que permite concatener es el mismo de la suma signo +
*/
/*
2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre = "string"
Apellido = "string"
Nombre de usuario en Platzi = "string"
Edad = "Number"
Correo electrónico = "string"
Mayor de edad = "Boolean"
Dinero ahorrado = "Number"
Deudas = "Number"
*/
/*
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
*/
var nombre = "Andres Felipe";
var apellido = "Giraldo Garcia";
var UsuarioPlazit = "@darenslefepi";
var edad = 39;
var email = "felipe.afgg@gmail.com";
var adulto = true;
var ahorros = 50000;
var deudas = 5000;
/*
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/
var nombreCompleto = nombre + " " + apellido;
var presentacion = (`Mi nombre es ${nombre} ${apellido} nice to meet you`);
presentacion
nombreCompleto
var flujoCaja = ahorros - deudas;
var balance = (`tengo despues de pagar mis deudas ${flujoCaja} dolares`)
balance
flujoCaja

/* Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
es un conjunto de instruciones (bloque de codigo) que tomando ciertos valores devuelve u resultado y tiene la capacidad de ser reutilizada en cualquier parte del codigo solo invocandola, ejemplo de incocacion myfuncion()
¿Cuándo me sirve usar una función en mi código?
cuando voy a repetir muchas veces el mismo procedimiento, es mejor crear una funcion que haga este 
¿Cuál es la diferencia entre parámetros y argumentos de una función?
la diferencia es que los parametros son los que se declaran entre parentesis despues del nombre de la funcion y representan el nombre del valor que se espera sea pasado para hacer efectivas las intruciones de la funcion y asi arrojar su valor, por tanto los argumentos son los valores que se dan cuando quiero validar mi funcion, 
Ejemplo Parametro
funtion ejemplo(parametro1, parametro2) {
    return suma parametro1 + parametro2;
}
Ejemplo argumento 
solo llamo la funcion 
ejemplo(argumento1, argumento2) 

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
*/
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + " " + lastname;
const nickname = "juandc";

function saludo(name, lastname, nickname) {
    console.log("Mi nombre es " + name + " " + lastname + ", pero prefiero que me digas " + nickname + ".");
}
saludo("andres Felipe", "Giraldo Garcia", "Darenslefepi")

/* Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
Es una expresion que nos permite evaluar si algo es true o false
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
hay 4 if, switch los cuales preguntan si algo es verdad y si alguno lo es termina el ciclo y arroja el resultado, si ninguno es verdad, igual termina el ciclo, y la diferencia entre estos dos es que switch se sugiere para busquedas mucho mas grandes, ya por otro lado esta for y while los cuales pueden crear bucles infinitos si no le colocamos un final ya que se repetiran por siempre como decir while (num < 0) {num ++}, esto seria infinito, ya que nun nuca seria menor que 0
IF (else y else if), Switch
El codicional if (con el se y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.
¿Puedo combinar funciones y condicionales?
si, y esto se crea para crear mas logica a los programas.
2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
*/
const tipoDeSuscripcion = "Free";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
//replica con if, else y else if:

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No cuentas con suscripcion")
}

/*
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
*/
// solo on if 
var suscripcion = "Basic";
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}
/* if (tipoDeSuscripcion == "Free" || tipoDeSuscripcion == "Basic" || tipoDeSuscripcion == "Expert" || tipoDeSuscripcion == "ExpertPlus") {
    console.log("Puedes tomar los cursos de Plazit");
} */

let typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];
    let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
    let userSuscription = "ExpertPlus";
    for (let i=0; i < typeSuscripción.length; i++) {
      if (userSuscription == typeSuscripción[i]) {
          console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
      }
    }


    //otra mejor

    const tiposDeSuscripciones = {
        free: 'Solo puedes tomar los cursos gratis',
        basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
        expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
        expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
    };
    
    function conseguirTipoSuscripcion(suscripcion) {
        if (tiposDeSuscripciones[suscripcion]) {
            console.log(tiposDeSuscripciones[suscripcion]);
            return;
        }
    
        console.warn('Ese tipo de suscripción no existe')
    }

    console.log(conseguirTipoSuscripcion('free'))

/* Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
es un procedimiento que se repite de forma infinita mientras no tenga algun condicional que lo detenga
¿Qué tipos de ciclos existen en JavaScript?
existen el ciclo for, for each y while, do while
¿Qué es un ciclo infinito y por qué es un problema?
es un procedimiento que nunca terminaria y puede bloquear nuestro computador al consumir toda su memoria ram
¿Puedo mezclar ciclos y condicionales?
si, generalmete uno muy utilizado es el ciclo for con el condicional if
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
*/
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
var i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
} 

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
var i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
/*
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
*/
let usuario 
let respuesta = 4
function validacion(usuario, respuesta) {
    while (usuario != respuesta) {
        usuario = prompt("Cuanto es 2 + 3:");
    } alert("felicitaciones")
    
}
console.log(validacion(4, 4)) /* con la funcion puedo cambiar los numeros */

/* Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
Es una variable con un conjunto de datos de cualquier tipo, y no tienen limites para almacenar elementos, y el cual puede ser recorrido para buscar sus elementos 
¿Qué es un objeto?
es un variable que puede guardar atributos y valores de como el mismo nombre lo dice un objeto, ejmplo un carro, el cual tiene llantas 4, color azul, modelo 2030, etc
¿Cuándo es mejor usar objetos o arrays?
cuando nesecito tener toda clase de elemtos como string, numbre, boolena, undefined, array, etc, es mejor un array y cuando debo describir un objeto o varios es mejor el objeto
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si y como ejemplo
*/
var objetivo = [1, {vaca: "muu", color: "gris", apodo: "Vaiolet"}, true, "London"];
console.log(objetivo[1].apodo)

var objetitoo = {
    color: "azul",
    patas: 3,
    vacunas: ["malaria", "Rabia", "Vaca loca"]
}
console.log(objetitoo.vacunas[2])
/*
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
*/
var mascota = ["Luigi", "Zeus", "Tonny"]
var indicada
var primerElemento
function mascotaIndicada() {
    /* for(var i = 0; i < mascota.length; i++) {
        indicada = mascota[2]
    }return indicada */
    while(mascota.length > 1) {
        mascota.pop()
    }
    indicada = mascota
    primerElemento = indicada[0]
    return primerElemento
}
console.log(mascotaIndicada())

function basica() {
    return(mascota[0])
}
console.log(basica())
/*
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
*/
var mascota = ["Luigi", "Zeus", "Tonny"]
function unoAlavez(mascota) {
  for (let i = 0; i < mascota.length; i++) {
    console.log(`${i + 1} ${mascota[i]}`)
  }
}
unoAlavez(mascota);
/*
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */

const disfraz = {
    tipo: "Batman",
    modelo: "Caballero Oscuro",
    año: 1956
};

function heroe(gottan) {
    for(let key in gottan) {
        console.log(gottan[key]);
    }
}
heroe(disfraz)

var atributo = Object.keys(disfraz);
atributo
unoAlavez(atributo)

var valor = Object.values(disfraz);
valor
unoAlavez(valor)

