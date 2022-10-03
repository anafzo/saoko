/**
 * FIFO:
 *     E3   E2   E1 ---> [ arreglo ] --->   E3   E2   E1
 * LIFO:
 *     E3   E2   E1 ---> [ arreglo ] --->   E1   E2   E3
 */

// FIFO
const perecederos=["manzanas", "quesos", "fresas"];
console.log("/n ------ FIFO ------");
// Agregamos un elemento al final del arreglo:
perecederos.push("leche");
console.log(perecederos);
// Sacamos el primero elemento del arreglo:
console.log("Elemento eliminado: "+ perecederos.shift());
console.log(perecederos);

// LIFO
console.log("/n ------ LIFO ------");
const tienda=[...perecederos]; // se clona el arreglo const tienda = perecederos.slice();
console.log(tienda);
// Agregamos un elemento al final del arreglo:
perecederos.push("el amor"); //Será mi 4to elemento
console.log(tienda);
// Sacamos el último elemento en entrar
console.log("Elemento eliminado: " + tienda.pop());
console.log(tienda);

const generation=[
    ["Abelardo", "Audrey", "Angel", "Sharon", "Bren", "El bromas", "Victor", "Alex"],
    ["Yosceline", "Mariana", "Karen", "Pedro"],
    ["Emiliano", "Jonathan", "Esteban", "El bromas"]
];
for (i=0;i<generation.length;i++){
    for (n=0;n<generation[i].length;n++){
        if (generation[i][n]=="El bromas")
        console.warn(generation[i][n] + "se encuentra en la cohorte "+ (i+1));
    }
}