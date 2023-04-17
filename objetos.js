var automovil = {
    Marca: "Chevrolet",
    Modelo: "Ferrari",
    Año: 2450,
    detalleDelAuto: function() {
        return(`Auto ${this.Modelo} ${this.Año}`)
    },
    "numero puertas": 10 /* es obligaorio si hay espacios las comillas */
};
automovil.Color = "Yellow"
automovil
console.log(automovil.Marca);
console.log(automovil.Modelo);
console.log(automovil.Año);
console.log(automovil.detalleDelAuto());
console.log(automovil["numero puertas"]);
console.log(automovil.Color);


/* Cómo eliminar propiedades de un objeto
Para eliminar propiedades de un objeto, utilizamos la palabra reservada delete seguido de la propiedad del objeto.

Por ejemplo, eliminemos la propiedad marca del objeto miAuto.

delete miAuto["marca"]
// o 
delete miAuto.marca

console.log(miAuto)
/* { 
  modelo: 'Corolla', <--- No existe la propiedad marca
  'año': 2020,
  detalle: ƒ detalle(),
} */ 

function Auto(Marca, Modelo, Año, Detalle) {
    this.Marca = Marca
    this.Modelo = Modelo
    this.Año = Año
}
Auto()

var autoMama = new Auto("Nissan", "Bt2200", 2010);

autoMama

var car = {
    color: "gray",
    Brand: "Chevrolet",
    licensePlate: "AAA111"
}

car

function licnecia(car) {
    if(car.licensePlate === null || car.licensePlate === undefined) {
        car.drivingLicence = false
    } else {
        car.drivingLicence = true
    }return car
} 
console.log(licnecia(car))