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


// let lista = [];

// let seleccion = (prompt('A agregar, B borrar, C buscar, D mostrar lista'));

//     switch (seleccion){
//         case 'A':
//             lista.push(prompt('Añadir un elemento a la lista?'));
//             break;
//         case 'B':
//             lista.slice(lista.lastIndexOf(prompt('Eliminar un elemento?'))=A)
//             break;
//         case 'C':
//             if(lista.indexOf(prompt('Saber si un elemento existe?'))){
//                 console.log('NO TENGO LO QUE BUSCAS')
//             }
//             else{
//                 console.log('SI TENGO LO QUE BUSCAS')
//             }
//             break;
//         case 'D':
//             console.log(lista);
//             break;
//         default:
//         break;


//     }

// let numeros = [3,4,6,7,8,93,4];

// function dobleNumero(arreglo) {
//     let numeros2 = [];
//     for (let i = 0; i < numeros.length; i++){
//     numeros2.push(numeros[i] * 2)
// }
//     return numeros2;
// }

// const numeros2 = dobleNumero(numeros);

// console.log(numeros2);

// function datos(data) {
//     let personaMayor = [];
//     for (let persona of usuarios) {
//         if (persona.edad > 17) {
//             personaMayor.push(persona);
//         }
//     }
//     return newData;
// }

// console.log(data);

// let datos = [nombre, edad, hobbie];

// lista.forEach((element) => {
//             let nombre = element.nombre;
//             let edad = element.edad;
//             let hobbie = element.grado;
            
//             console.log(`Nombre: ${nombre}. Edad: ${edad}. Grado: ${grado}. Grupo: ${grupo}.`);
//         });

// function datos




let usuarios = [
    {name: 'juan', edad: 17, hobbie: ['videojuegos', 'caminar']},
    {name: 'pedro', edad: 127, hobbie: ['coleccionar playeras']},
    {name: 'pablo', edad: 15, hobbie: ['videojuegos', 'bicicletas']},
    {name: 'luis', edad: 16, hobbie: ['leer', 'cantar']},
    {name: 'john', edad: 18, hobbie: ['bailar', 'dormir']}, 

];

let personaMayor = [];
    for (let persona of usuarios) {
        if (persona.edad > 17) {
            personaMayor.push(persona);
        }
    }



    //Prueba 1
    // persona es igual {name: 'juan', edad: 17, hobbie: ['videojuegos', 'caminar']},
    // persona.edad es igual a 17
    // push ({name: 'juan', edad: 17, hobbie: ['videojuegos', 'caminar']})
    // personaMayor es igual [{name: 'juan', edad: 17, hobbie: ['videojuegos', 'caminar']}]

    // persona es igual {name: 'pedro', edad: 127, hobbie: ['coleccionar playeras']},
    // persona.edad es igual a 127
    // push ({name: 'pedro', edad: 127, hobbie: ['coleccionar playeras']},)
    // personaMayor es igual [{name: 'juan', edad: 17, hobbie: ['videojuegos', 'caminar']}, {name: 'pedro', edad: 127, hobbie: ['coleccionar playeras']}]

    // persona es igual {name: 'pablo', edad: 15, hobbie: ['videojuegos', 'bicicletas']},
    // persona.edad es igual a 15
    // push ()
    // personaMayor es igual [{name: 'juan', edad: 17, hobbie: ['videojuegos', 'caminar']}, {name: 'pedro', edad: 127, hobbie: ['coleccionar playeras']}]


// MAP

            // 0,1,2,3,4,5 ,6
// let numeros = [3,4,6,7,8,93,4];

// numeros.map((current, index, array) => current * 2); //[6]
                                                     //[6,8]
                                                     //[6,8,12]
                                                     //[6,8,12,14]
                                                     //[6,8,12,14,16]
                                                     //[6,8,12,14,16,186]
                                                     //[6,8,12,14,16,186,8]



// let numeros = [3,4,6,7,8,93,4];

// numeros.map((current, index, array) => {
//     if (index % 2) {
//         current * 2;
//     }
// });


// numeros.filter((current, index, array) => {
//     if (index % 2 === 0) {
//         current * 2;
//     }
// });

//[]
//[]
//[12]
//[12]

//....

let numeros = [3,4,6,7,8,93,4];

numeros.reduce((previous, current, currentIndex, currentArray) => previous + current );

numeros.reduce((previous, current, currentIndex, currentArray) => {
    
}, [])









