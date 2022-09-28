console.log("Sesión JS03 Condicionales");

// +++++++++++++++ Declaración de bloque ++++++++++++++++++

let nombre = "Rafa";
let ciudad = "Guadalajara";

{
    let nombre = "Fer";
    let ciudad = "CDMX";
    let apellido = "Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}, vive en ${ciudad}`);
}

console.log(`Participante: ${nombre}, que vive en ${ciudad}`);

// +++++++++++++++ Condicional IF ++++++++++++++++++
/**
 * Sintaxis:
 *        if (condición verdadera) instrucción;
 * 
 *        if (condición verdadera) {
 *              instrucciones;
 *        }
 */
let edad = 28;

console.log ("*** Declaración antes del if --->");

if (edad > 24) console.log("La edad es mayor o igual a 25");
else {
    console.log("La edad es menor a 25");
    console.log("Seguiremos evaluando");
}

console.log ("<--- Declaración después del if ***");

// +++++++++++++++ Operador ternario ++++++++++++++++++
//Sintaxis: condición ? condición_verdadera : condición falsa;

console.log(`La edad es ${edad>24 ? "mayor" : "menor"} a 25`);
console.log(`La edad es ${edad===25 ? "igual": edad>24 ? "mayor":"menor"} a 25`);

// ++++++++++++++ condicional if, else if, else +++++++++++++++++
/**
 * Sitaxis:
 * 
 *          if (condiciónVerdadera) {
 *              instrucciones;
 *            }
 *          else if (OtraCondición) {
 *            }
 *          else if (OtraCondición) {
 *            }
 *          else {
 *              instrucciones;
 * }
 */

edad = 25;
console.log("--- Uso de if, else if, else ---")
if (edad===25){
    console.log(`La edad es igual a 25`);
} else if (edad>24) {
    console.log(`La edad es mayor a 25`);
} else {
    console.log(`La edad es menor a 25`);
}

console.log("---- Opción 2 (Clari) ----")
if (edad===25) comparacion="igual";
else if (edad>24) comparacion="mayor";
else comparacion="menor";
console.log(`La edad es ${comparacion} a 25`);

// +++++++++++++++ condicional switch ++++++++++++++++++
/**
 * Sintaxis:
 *        switch (expresión){
 *              case valor1:
 *                      instrucciones;
 *                      break;
 *              case valor2:
 *                      instrucciones;
 *                      break;
 *              case valor3:
 *                      instrucciones;
 *                      break;
 *              default:
 *                      instrucciones;
 *          }
 */
edad=25;
comparacion="";

switch (edad){
    case 25:
        comparacion="es igual";
        break;
    case 24:
        comparacion="es menor";
        break;
    case 26:
        comparacion="es mayor";
        break;
    default:
        comparacion="*no se puede saber*";
}

console.log(`(Switch) La edad ${comparacion} a 25`);