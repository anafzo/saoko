import {Banda} from './banda.js'
import {BandaEmo} from './bandas-emo.js'

console.log("JS08 Un día triste como todos los demás");

const elRecodo = new Banda("El Recodo", 50, "México");

console.log(elRecodo);
console.log(elRecodo.imprimir());

const mS= new Banda("MS", 200, "México");
console.log(mS.imprimir());

const pXNDX = new Banda ("PXNDX", 4, "México");
console.log(pXNDX.imprimir());

/* Verificar la fecha de creación */
console.log(`Fecha de creación de ${elRecodo.nombre} fue el ${elRecodo.creacion}`);
console.log(`Fecha de creación de ${pXNDX.nombre} fue el ${pXNDX.creacion}`);

elRecodo.nParticipantes += 1;
console.log(elRecodo.imprimir());

// Instanciar una banda Emo
const paramore = new BandaEmo("Paramore", 3, "USA", 3.5);
console.log(paramore.imprimir());
// console.log(paramore.imprimirEmo());


// Usando POLIMORFISMO -->
muestraDatos(elRecodo);
muestraDatos(paramore);
muestraDatos("La banda me dice que todo lo que hago está mal");

function muestraDatos (objBanda) {
    let esTipoBanda = objBanda instanceof Banda;
    console.log("El dato es del tipo Banda (o heredado): " + esTipoBanda);
    if (esTipoBanda){
    console.log("===== ATENCIÓN, TOQUÍN DE =====");
    console.log(objBanda.imprimir()); // Que muestra
    console.log("===== NO TE LO PIERDAS =====");
    }
}