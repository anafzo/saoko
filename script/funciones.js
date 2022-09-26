console.log("Sesión JS02 Funciones");

// +++++++++++++++ FUNCIÓN DECLARADA ++++++++++++++++++
// Llamado de la función declarada.
console.log("Multiplica 5 x 6 = " + multiplica(5,6))

/**
 * Este es un ejemplo de una función declarada (function declaration, function statement).
 * Una característica de las funciones declaradas es que tiene un hoisting (elevación).
 * 
 * Realiza la multiplicación de 2 números
 * @param {number} a multiplicando 1 
 * @param {number} b multiplicando 2 
 * @returns resultado de la multiplicación de a*b
 */
function multiplica(a,b){
    return a*b;
}

// +++++++++++++++ FUNCIÓN EXPRESADA ++++++++++++++++++
/**
 * Las funciones expresadas (function expressions) son declaradas dentro de la asignación de una variable
 * 
 * Estas funciones pueden ser anónimas (no tener nombre). 
 * Las funciones expresadas no tienen hoisting
 */
/**
 * Sumatoria de 2 números
 * @param {number} a  
 * @param {number} b 
 * @returns resultado de a+b
 */
const suma = function (a,b) {return a+b};
console.log("El resultado de 56 + 4 = " + suma(56,4));

// +++++++++++++++ FUNCIÓN AUTOINVOCADAS ++++++++++++++++++
/**
 * Las funciones autoinvocadas (self-invoking functions)
 * Pueden ser anónimas y se autoejecutan() en su declaración (function)().
 */

(function (){
    console.log("====================");
    console.log("    Hola crayola");
    console.log("====================");
})();

// +++++++++++++++ FUNCIÓN FLECHA ++++++++++++++++++
/**
 * Las funciones flecha (arrow functions) funcionan similar a las funciones declaradas, pero no requieren la palabra "function" y si tienen una sola instrucción y es el retorno, no requieren la instrucción "return".
 */
/**
 * Realiza la operación de 2 números
 * @param {number} a Valor 1 
 * @param {number} b Valor 2
 * @returns resta a-b
 */
const resta = (a,b) => a-b;
console.log("La resta de 10 - 5 = " + resta(10,5));

// +++++++++++++++ parámetros default ++++++++++++++++++
/**
 * Función con parámetros inicializados
 */
function division (a,b=1) {
    return a/b;
}
console.log("La división de a/b = " + division(4));

// +++++++++++++++ FUNCIONES RECURSIVAS ++++++++++++++++++
function factorial(num){
    if(num<=0) return 1;
    return (num*factorial(num-1));
}
console.log("Factorial de 4 = " + factorial(4));