console.log("JS06 Asincronia");

console.log("01 - Primera instrucción");

// SetTimeout (función callback, tiempo para ejecutar(ms));
// setTimeout(()=>console.log("01.5 Holi Crayoli"),3000);

const temporizador = (retardo, msj) => {
    setTimeout(() => console.log(msj), retardo);
}

const intervalo = (tiempo, msj) => {
    setInterval(() => console.log(msj), tiempo);
}

// temporizador(5000,"02 - Segunda instrucción");
// intervalo(2000, "Holi Crayoli");

console.log("03 - Tercera instrucción");

// ***********************************************************
// API Fetch

console.log("01 - Antes de la solicitud fetch:");

function solicitudFetch(userToFind) {
    /* 
    * fetch nos sirve para realizar solicitudes http (get, post, delete, etc.)
    * Sintaxis: fetch( url , { configuración adicional } )
    *                .then ( funcionCallBack )
    * 
    * funcionCallBack ( parámetro ){
    * 
    * }
    */
    fetch("https://reqres.i/api/users?delay=3")
        .then(response => response.json())
        .then(conversion => {
            let encontrado = conversion.data.find(
                data => data.first_name === userToFind);

            console.log(encontrado);

            const objUser = document.getElementById("user-name");
            const objEmail = document.getElementById("user-email");
            objUser.value = encontrado.first_name;
            objEmail.value = encontrado.email;
            usarLocalStorage();
            return "hola";
        })
        .then(msj => console.log("Retorno del then anterior: " + msj))
        .catch(err => console.log(err));
}

function leerUsuario(usuario) {
    console.log("Usuario a buscar: " + usuario);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.time > Date.now()) {
        leerLocalStorage();
    }
    else {
        solicitudFetch(usuario);
    }
}

function usarLocalStorage() {
    const objUser = document.getElementById("user-name");
    const objEmail = document.getElementById("user-email");
    // Sintaxis para local estorage: localStorage.setItem('clave', valor)
    const user = {
        name: objUser.value,
        email: objEmail.value,
        time: Date.now() + 60000 // Leer el tiempo actual y sumarle 1 minuto
    }

    localStorage.setItem("name", objUser.value);
    localStorage.setItem("email", objEmail.value);
    // Para convertir un objeto a JSON: JSON.stringify( Obj )
    localStorage.setItem("user", JSON.stringify(user));
}

function leerLocalStorage() {
    const objUser = document.getElementById("user-name");
    const objEmail = document.getElementById("user-email");

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    objUser.value = user.name;
    objEmail.value = user.email;
}

function miPromesa() {
    let promesa = new Promise((resolve, reject) => {
        const expresion = false; // Cualquier operación

        if (expresion) resolve("La promesa fue exitosa"); //Puedo devolver cualquier tipo de dato
        else reject("La promesa NO se resolvió");
    });
    promesa
        .then(response => console.log(response))
        .catch(error => console.log(error))
        .finally(console.log("Se terminó de ejecutar la promesa"));
}

let division = (a, b) =>{
    return 
}

    // Async, await.
    async function operaciones() {

        // Los bloques try y catch nos sirven para el manejo de errores
        try {
            const result1 = await division(4, 0);
            console.log("El resultado de la división es: " + result1);
        }
        catch (error) {
            console.log("No se puede realizar la división: " + error);
        }
        try {
            const result1 = await division(4, 2);
            console.log("El resultado de la división es: " + result2);
        }
        catch (error) {
            console.log("No se puede realizar la división: " + error);
        }
    }
operaciones();




/* DIFERENTES MANERAS DE ENCONTRAR DATOS EN OBJETOS
*   // 1era forma
* console.log(conversion.data[0].first_name);
* console.log(conversion.data[0].email);
*
*  // 2da forma
* let { email, first_name } = conversion.data[0];
* console.log(email, first_name);
* console.log(conversion.data)
*
* let encontrado = conversion.data.find(data => data.first_name === "nombre");
*/