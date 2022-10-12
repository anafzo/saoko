console.log("Sesión JS08 OOP");

const miArreglo = [5, 7, 3, 2];
const miArregloConstructor = new Array(5, 7, 3, 2);

console.log(miArreglo);
console.log(miArregloConstructor);
// Propiedades de mi arreglo
console.log(miArreglo.length);
console.log(miArregloConstructor.length);
// Método del arreglo
console.log(miArreglo.sort());
console.log(miArregloConstructor.sort());

// ==============================================================

let coraline = {
    region: [4, 1, 2],
    nombre: "Coraline y la puerta secreta",
    duracion: 100,
    genero: ["Animación", "Misterio", "Fantasia"],
    clasificacion: "B15",
    actores: [
        {
            nombre: "Teri Hatcher",
            pais: "USA"
        },
        {
            nombre: "Jennifer Saunders",
            pais: "USA"
        },
        {
            nombre: "Dakota Fanning",
            pais: "USA"
        }
    ],
    directores: {
        nombre: "Henry Selik",
        pais: "USA"
    },
    /* mostrarActores: () => { coraline.actores.forEach((info) => console.log(`${info.nombre} del país ${info.pais}`)); */
    mostrarActores: function () {
        // La palabra reservada this, hace referencia al objeto que lo invoque
        this.actores.forEach (info => {
            console.log(`${info.nombre} del pais ${info.pais}`);
        });
    },
    /**
     * Mostrar todos los datos.
     * Mostrar el resto de información.
     */
    mostrarTodaInfo: function(){
        console.log("*********************************");
        console.log(`Película: ${this.nombre}`);
        console.log(`Duración: ${this.duracion} min`);
        this.genero.forEach(info=> {
            console.log(`Genero: ${info}`);
        });
        console.log("Clasificación: " + this.clasificacion);
        console.log("Actores: ");
        this.mostrarActores;
        console.log(`Director: ${this.directores.nombre} del país ${this.directores.pais}`);
        console.log("*********************************");
    }
};

// Accediendo al nombre:
console.log("Pelicula: " + coraline.nombre);

coraline.actores.forEach(info => {
    console.log(`Actor: ${info.nombre} del pais ${info.pais}`);
});

// Mostrando el director
console.log(`Director: ${coraline.directores.nombre}`);

// Cambiando la clasificación
coraline.clasificacion = "C";
console.log("Clasificación: " + coraline.clasificacion);

// Agregando al actor: Ian McShane de UK.
coraline.actores.push({ nombre: "Ian McShane", pais: "UK" });
coraline.actores.push({ nombre: "Jennifer Saunders", pais: "UK" });

// Iteramos los actores:
// coraline.actores.forEach(info => {
// console.log(`Actor: ${info.nombre} del país ${info.pais}`);});
coraline.mostrarActores();
coraline.mostrarTodaInfo();