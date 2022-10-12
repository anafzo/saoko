class Banda {
    // Se definen los atributos
    #creacion;
    #nombre;
    #nParticipantes;
    #pais;
    constructor(nombre, nParticipantes, pais) {
        this.#nombre = nombre;
        this.#nParticipantes = nParticipantes;
        this.#pais = pais;
        this.#creacion = new Date();
    }

    imprimir() {
        return `Grupo: ${this.#nombre} con ${this.#nParticipantes} participantes del país ${this.#pais}`
    }

    get creacion (){
        return this.#creacion;
    }

    get nParticipantes(){
        return this.#nParticipantes;
    }

    set nParticipantes(nuevoNumero){
        this.#nParticipantes = nuevoNumero;
    }

}

export{Banda};