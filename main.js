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




// let usuarios = [
//     {name: 'juan', edad: 17, hobbie: ['videojuegos', 'caminar']},
//     {name: 'pedro', edad: 127, hobbie: ['coleccionar playeras']},
//     {name: 'pablo', edad: 15, hobbie: ['videojuegos', 'bicicletas']},
//     {name: 'luis', edad: 16, hobbie: ['leer', 'cantar']},
//     {name: 'john', edad: 18, hobbie: ['bailar', 'dormir']}, 

// ];

// let personaMayor = [];
//     for (let persona of usuarios) {
//         if (persona.edad > 17) {
//             personaMayor.push(persona);
//         }
//     }



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

// inicio clase 07 

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

// let numeros = [3,4,6,7,8,93,4];

// numeros.reduce((previous, current, currentIndex, currentArray) => previous + current );

// numeros.reduce((previous, current, currentIndex, currentArray) => {
    
// }, [])


// let nombres = [
//     { nombre: 'Maria', calificaciones: [9,9,7,8,10] },
//     { nombre: 'Antonio', calificaciones: [9,8,7,8,10] },
//     { nombre: 'Juan', calificaciones: [9,9,7,8,2] },
//     { nombre: 'Luis', calificaciones: [9,9,7,8] },
//     { nombre: 'Ana', calificaciones: [9,9,7,8,10] },
//     { nombre: 'Maria', calificaciones: [9,9,8,10,5] },
//     { nombre: 'Pedro', calificaciones: [7,9,7,8,10] },
//     { nombre: 'Julio', calificaciones: [6,0,7,8,10] },
// ]

// retornar los alumnos con promedio mayor a 9

// return []

// nombres.reduce((previous, current, currentIndex, currentArray) => {
//     if (currentArray % 5) {
        
//     }
// },)

// let alumnos = [
//     { nombre: 'Maria', calificaciones: [9,9,7,8,10] }, // 
//     { nombre: 'Antonio', calificaciones: [9,8,7,8,10] },
//     { nombre: 'Juan', calificaciones: [9,9,7,8,2] },
//     { nombre: 'Luis', calificaciones: [9,9,7,8] },
//     { nombre: 'Ana', calificaciones: [9,9,7,8,10] },
//     { nombre: 'Maria', calificaciones: [9,9,8,10,10] },
//     { nombre: 'Pedro', calificaciones: [7,9,9,8,10] },
//     { nombre: 'Julio', calificaciones: [10,9,7,8,10] },
// ];
// console.log(
//     alumnos.reduce((p,c) => {
//         if ((c.calificaciones.reduce((c1,c2) => c1+c2) / 5) > 8) {
//             p = [...p, c]
//         }
//         return p;
//     }, [])
// );

// console.log(document)


// const clases = ['rojo', 'azul', 'rosa', 'verde', 'violeta'];

// // Math.floor(Math.random() * (clases.length - min + 1)) + min;

// function colorAleatorio(id) {
//     const boton = document.getElementById(id);
//     const color = Math.floor(Math.random() * (clases.length - 0 + 1) ) + 0;
//     console.log(color);
//     boton.classList.add(clases[color]);
// }

// fin clase 07


//ejercicios del 11 de febrero






// let Datos = [];

// Agregar ();

//     lista.forEach((element) => {
//         let A = element.A;
//         let B = element.B;
//         console.log(`A: ${A}. B: ${B}.`);
//     })

// class letras {
//     constructor(A, B){
//         this.A = A;
//         this.B = B;
//     }
// }

// class Datos extends letras {
//     constructor(A, B){
//         super(nombre, edad);
//         this.grado = grado;
//         this.grupo = grupo;
//     }
// }

// function Agregar(){
//     let respuesta = 3;
//     if(respuesta A == B){
//         let A = prompt('Ingresa dato A:');
//         let B = prompt('Ingresa dato B:');
//         let nuevo = new Datos(A, B);
//         lista.push(nuevo);
//         else{
//             'A'>'B'
//         }
//         respuesta = prompt('Deseas agregar un nuevo Dato? Y/N');
//     }
// }


//inicia clase 08

const clases = ['rojo', 'azul', 'rosa', 'verde', 'violeta'];



function colorAleatorio(id) {
    const boton = document.getElementById(id);
    const color = Math.floor(Math.random() * (clases.length - 0 + 1) ) + 0;
    console.log(color);
    boton.classList.add(clases[color]);
};

var boton = document.querySelector("button");

boton.addEventListener("click", () => {
console.log('boton');
});

const variable = document.createElement('h2');

variable.id = 'nuevoElemento';
variable.innerHTML = 'Este es un H2'

document.body.div.appendChild(variable);



