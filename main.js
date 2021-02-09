// Inicio de Ejercicio 1 clase 4 02/Febrero/21


// let lista = [];

// Agregar();

//     lista.forEach((element) => {
//         let nombre = element.nombre;
//         let edad = element.edad;
//         let grado = element.grado;
//         let grupo = element.grupo;
//         console.log(`Nombre: ${nombre}. Edad: ${edad}. Grado: ${grado}. Grupo: ${grupo}.`);
//     })

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }

// class Alumno extends Persona {
//     constructor(nombre, edad, grado, grupo){
//         super(nombre, edad);
//         this.grado = grado;
//         this.grupo = grupo;
//     }
// }

// function Agregar(){
//     let respuesta = 'Y';
//     while(respuesta=='Y'){
//         let nombre = prompt('Nombre:');
//         let edad = prompt('Edad:');
//         let grado = prompt('Grado:');
//         let grupo = prompt('Grupo:');
//         let nuevo = new Alumno(nombre, edad, grado, grupo);
//         lista.push(nuevo);
//         respuesta = prompt('Deseas agregar un nuevo Alumno? Y/N');
//     }
// }


let lista = [];

let seleccion = (prompt('A Agregar un Nuevo Contacto, B Buscar Contacto, C Eliminar Contacto, D Modificar Contacto'));

    switch (seleccion){
        case 'A':
            lista.push(prompt('Quieres añadir un nuevo contacto?'))
            if(lista.push(prompt('Quieres añadir un nuevo contacto?'))
                console.log('SI')
            
            else{
                console.log('SI TENGO LO QUE BUSCAS')
            }
            break;
        case 'B':
            lista.slice(lista.lastIndexOf(prompt('Buscar un contacto?'))=A)
            break;
        case 'C':
            if(lista.indexOf(prompt('Eliminar un Contacto?'))){
                console.log('NO TENGO LO QUE BUSCAS')
            }
            else{
                console.log('SI TENGO LO QUE BUSCAS')
            }
            break;
        case 'D':
            console.log(lista);
            break;
        default:
        break;


    }
    







