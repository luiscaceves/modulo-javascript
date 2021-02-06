// Inicio de Ejercicio 4 de Febrero 21


let lista = [];

Agregar();

    lista.forEach((element) => {
        let nombre = element.nombre;
        let edad = element.edad;
        let grado = element.grado;
        let grupo = element.grupo;
        console.log(`Nombre: ${nombre}. Edad: ${edad}. Grado: ${grado}. Grupo: ${grupo}.`);
    })

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Alumno extends Persona {
    constructor(nombre, edad, grado, grupo){
        super(nombre, edad);
        this.grado = grado;
        this.grupo = grupo;
    }
}

function Agregar(){
    let respuesta = 'Y';
    while(respuesta=='Y'){
        let nombre = prompt('Nombre:');
        let edad = prompt('Edad:');
        let grado = prompt('Grado:');
        let grupo = prompt('Grupo:');
        let nuevo = new Alumno(nombre, edad, grado, grupo);
        lista.push(nuevo);
        respuesta = prompt('Deseas agregar un nuevo Alumno? Y/N');
    }
}


