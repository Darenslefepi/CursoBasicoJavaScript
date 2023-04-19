var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Laptop", costo: 25000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]
  console.log(articulos[6].nombre[0])
  articulos
  console.log(articulos[6].nombre)
/* fotma en que se recorre un array con objetos */
  var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.nombre[3] == "u" 
  });

  articulosFiltrados

  var articulosFiltrados = articulos.filter(function(articulo) {
        return articulo.nombre === "Laptop" 
  });

  articulosFiltrados

/* para solo traer una sola propiedad en este caso nombre o costo */

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

nombreArticulos

var costoArticulos = articulos.map(function(articulo){
    return articulo.costo
})

costoArticulos

var encuetraArticulo = articulos.find(function(articulo) {
  return articulo.nombre === "Laptop"
})

encuetraArticulo
/* la diferencia con filter es que este encuetra el primero y no busca mas */
/* el forEach no devuelve nada (no hace nuevo array) solo muestra en pantalla lo que quiero ver */
articulos.forEach(function(articulo) {
  console.log(articulo.nombre)
})

articulos.forEach(function(articulo) {
  console.log(articulo.costo)
})

/* valida si algo es true o false y eso devuelve en un nuevo array */
var articulosBaratos = articulos.some(function(articulo) {
  return articulo.costo <= 80
})

articulosBaratos

let name = 'Lydia';

function getName() {
  let name = 'Sarah';
  console.log(name);
  
}

getName();

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}

var uno1 = "1"
console.log(1)