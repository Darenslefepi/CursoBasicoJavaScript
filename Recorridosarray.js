var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
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

/* para solo traer una sola propiedad en este caso nombre o costo */

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

nombreArticulos

var costoArticulos = articulos.map(function(articulo){
    return articulo.costo
})

costoArticulos